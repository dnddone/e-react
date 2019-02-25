export default (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(SUCCESS|FAILURE)/.exec(type);

  if (!matches) { return state; }

  const [, requestName] = matches;
  return {
    ...state,
    [requestName]: new Date().toISOString(),
  };
};
