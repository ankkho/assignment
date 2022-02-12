import { loadProtoPath } from '../../utils';
import sayHello from './sayHello';
import sayPing from './sayPing';

const protoPath = loadProtoPath()

export default {
  protoPath,
  functions: {
    sayHello,
    sayPing
  }
};
