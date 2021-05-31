import { State } from '../../model/state';
import { LayoutTypes } from '../../model/viewerSettings';

interface MinAndMaxScroll {
  minScroll: number;
  maxScroll: number;
}

const getMinAndMaxScroll = (state: State): MinAndMaxScroll => {
  let margin = window.innerWidth / 2;
  let minScroll = margin * -1;
  let maxScroll = margin;
  if (state.layout === LayoutTypes.Flow) {
    if (state.scrollMode === 'horizontal') {
      if (state.labelByPosition) {
        let max = 0;
        state.labelByPosition.forEach((value, key) => {
          max = key;
        });
        minScroll = margin * -1 - max;
      }
    } else if (state.scrollMode === 'vertical') {
      margin = window.innerHeight / 2;
      maxScroll = margin;
      minScroll = window.innerHeight - state.totalHeight - margin;
    }
  }

  return { minScroll, maxScroll };
};

export default getMinAndMaxScroll;