import _ from 'lodash';

export const withoutError = (state) => _.omit(state, 'error');