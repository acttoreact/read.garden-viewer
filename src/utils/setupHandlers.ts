import { AddOnChangeEvent, AppendNewContent } from '../model/actions/global';
import { DispatchAPIAction } from '../model/actions/common';
import { LoadNewContent } from '../model/events';
import { State } from '../model/state';
import { LayoutTypes } from '../model/viewerSettings';
import loadContentsInBackground from './loadContentsInBackground';
import layoutSetup from '../viewer/layoutSetup';
import redrawUserHighlights from './highlights/redrawUserHighlights';

const setupHandlers = async (state: State, dispatch: DispatchAPIAction): Promise<void> => {
  if (state.config.initialContent) {
    const action: AppendNewContent = {
      type: 'appendNewContent',
      ...state.config.initialContent,
    };
    await dispatch(action);
  } else if (state.config.eventHandler && state.layout === LayoutTypes.Flow) {
    const loadNewContent: LoadNewContent = {
      type: 'loadNewContent',
      slug: state.config.slug,
      productSlug: state.productSlug,
      contentSlug: state.config.contentSlug,
    };
    state.config.eventHandler(loadNewContent);
  } else if (state.layout === LayoutTypes.Fixed) {
    layoutSetup(state);
  }
  if (state.layout === LayoutTypes.Fixed) {
    const onPageChange: AddOnChangeEvent<string> = {
      type: 'addOnChangeEvent',
      propertyName: 'contentSlug',
      event: () => {
        loadContentsInBackground(state);
        redrawUserHighlights(state);
      },
    };
    await dispatch(onPageChange);
    const onLayoutReady: AddOnChangeEvent<boolean> = {
      type: 'addOnChangeEvent',
      propertyName: 'wrapperReady',
      event: () => {
        loadContentsInBackground(state);
      },
    };
    await dispatch(onLayoutReady);
  }
};

export default setupHandlers;
