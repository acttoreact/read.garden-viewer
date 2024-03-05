import { Action } from './common';
import { FixedContentInfo } from '../state';
import { FitMode, GapMode } from '../viewerSettings';

/**
 * Names of the action types for Fixed Layout Actions
 */
export enum FixedActionTypes {
  SetDoublePage = 'setDoublePage',
  SetContentsInfo = 'setContentsInfo',
  SetZoom = 'setZoom',
  SetFitMode = 'setFitMode',
  SetGapMode = 'setGapMode',
}

/**
 * Set the Single Page Mode (not scroll mode)
 */
export interface SetDoublePage extends Action {
  type: 'setDoublePage';
  doublePage: boolean;
}

/**
 * Set fixed contents info
 */
export interface SetContentsInfo extends Action {
  type: 'setContentsInfo';
  /**
   * Info for every content
   */
  info: FixedContentInfo[];
}

/**
 * Set zoom level to desired value
 */
export interface SetZoom extends Action {
  type: 'setZoom';
  /**
   * Desired new zoom
   */
  zoom: number;
}

/**
 * Sets fit mode to width or height
 */
export interface SetFitMode extends Action {
  type: 'setFitMode';
  /**
   * Desired fit mode
   */
  fitMode: FitMode;
  /**
   * Center current page
   */
  center?: boolean;
}

/**
 * Sets gap mode to desired mode
 */
export interface SetGapMode extends Action {
  type: 'setGapMode';
  /**
   * Desired gap mode
   */
  gapMode: GapMode;
}

/**
 * Actions for FixedLayout
 */
export type FixedActions = SetDoublePage | SetContentsInfo | SetZoom | SetFitMode | SetGapMode;
