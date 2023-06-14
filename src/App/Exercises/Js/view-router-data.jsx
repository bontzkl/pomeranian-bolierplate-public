import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaData18052023 } from './EmptyValuesAndCommets/router-data';
import { blockRouterMetaData as blockRouterMetaData21052023 } from './Js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaData23052023 } from './SetTimeout/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMoleGame } from './HitTheMole/router-data';
import { routerMetaData as MemoGame } from './MemoGame/router-data';
import { blockRouterMetaData as Promises } from './Promises/router-data';
export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaData18052023,
  blockRouterMetaData21052023,
  blockRouterMetaData23052023,
  blockRouterMetaDataHitTheMoleGame,
  MemoGame,
  Promises,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
