import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'mongodb',
        entities: [
            __dirname + './../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];