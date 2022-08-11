import { ValidatorConstraint } from 'class-validator';
import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UniqueValidator } from './unique-validator';

@ValidatorConstraint({ name: 'unique', async: true })
@Injectable()
export class Unique extends UniqueValidator {
  constructor(
    @Inject(process.env.DATA_SOURCE)
    protected readonly dataSource: DataSource,
  ) {
    super(dataSource);
  }
}
