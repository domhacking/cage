import Firebase from 'firebase';

export function create(url) {

  const ref = new Firebase(url);

  return new Promise((resolve, reject) => {
    return resolve({ ref });
  });

}

export function get(ref, path) {

  return ref.get(path);

}
