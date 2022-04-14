import { Connection } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';

@Injectable()
export class DatabaseService {

  constructor(
    @InjectConnection()
    private readonly connection: Connection
  ) {}

  getDbHandle() {
    return this.connection;
  }
  
}