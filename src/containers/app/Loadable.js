/**
 *
 * Asynchronously loads the component for app container
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
