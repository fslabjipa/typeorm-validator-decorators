import { Module } from '@nestjs/common';
import { EntityExist } from './entity-exist';
import { Unique } from './unique';

@Module({
  providers: [EntityExist, Unique],
  exports: [EntityExist, Unique],
})
export class ValidatorModule {}
