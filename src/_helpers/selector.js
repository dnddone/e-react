const getEntityArray = (entities) => {
  if (typeof entities === 'string') { return [entities]; }
  if (Array.isArray(entities)) { return entities; }

  return [];
};

export const createLoadingSelector = entities => state =>
  // returns true only when all actions is not loading
  getEntityArray(entities).some(entity => state.api.loading[entity]);

export const createErrorMessageSelector = entities => (state) => {
  // returns the first error messages for actions
  // * We assume when any request fails on a page that
  //   requires multiple API calls, we shows the first error
  let errors = getEntityArray(entities).map(entity => state.api.error[entity]);
  errors = errors.filter(Boolean);
  if (errors && errors[0]) { return errors[0]; }

  return '';
};

export const createLastFetchDateSelector = entitie => state =>
  state.api.lastFetch[entitie];
