import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExercise1Data } from './SubRouteExercise1/router-data';
import { SubRouteExercise3Data } from './SubRouteExercise3/router-data';
import { SubRouteExercise2Data } from './SubRouteExercise2/router-data';
import { SubRouteExercise4Data } from './SubRouteExercise4/router-data';
import { SubRouteExercise5Data } from './SubRouteExercise5/router-data';
import { blockRouterMetaData as blockRouterMetaData160520232 } from './MaterialUIBasicElements/router-data';
import { SubRouteMUITemplateDashboard } from './MUITemplateDashboard/router-data';
import { SubRouteExerciseData as SubRouterLocalDevAndFetch } from './LocalDevAndFetch/router-data';
export const blockRouterMetaData = [
  SubRouteExercise1Data,
  SubRouteExercise2Data,
  SubRouteExercise3Data,
  SubRouteExercise4Data,
  SubRouteExercise5Data,
  blockRouterMetaData160520232,
  SubRouteMUITemplateDashboard,
  SubRouterLocalDevAndFetch,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
