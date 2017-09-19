/**
 * Created by scbr_ on 03-09-2017.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero', edad: 25 },
      { id: 11, name: 'Mr. Nice', edad: 25 },
      { id: 12, name: 'Narco', edad: 25 },
      { id: 13, name: 'Bombasto', edad: 25 },
      { id: 14, name: 'Celeritas', edad: 25 },
      { id: 15, name: 'Magneta', edad: 25 },
      { id: 16, name: 'RubberMan', edad: 25 },
      { id: 17, name: 'Dynama', edad: 25 },
      { id: 18, name: 'Dr IQ', edad: 25 },
      { id: 19, name: 'Magma', edad: 25 },
      { id: 20, name: 'Tornado', edad: 25 }
    ];
    return {heroes};
  }
}
