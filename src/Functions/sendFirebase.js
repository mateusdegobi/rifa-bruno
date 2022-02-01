import {getDatabase, onValue, ref, set} from 'firebase/database';

export default function sendFirebase(number, buyer, phone1, phone2, order) {
    const firebase = getDatabase();
    const query_path = '/presolds/';
    let query_length;
    onValue(ref(firebase, query_path), snapshot => {
      const data = snapshot.val();
      query_length = data.length;
    });

    set(ref(firebase, `${query_path}/${query_length}/`), {
      order,
      number,
      buyer,
      phone1,
      phone2,
      date_timestamp: new Date().getTime(),
    });
}