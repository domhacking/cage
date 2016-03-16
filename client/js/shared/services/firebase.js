import Firedux from 'firedux';

export function create(url) {

  return new Firedux({ url });

}

export function get(ref, path) {

  return ref.get(path);

}

// TODO - unsupported features - firedux.ref
