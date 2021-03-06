import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Calc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstCurrency: string;
  @Column()
  secondCurrency: string;
  @Column()
  amount: number;
  @Column()
  price: string;
  @Column()
  result: string;
  @Column()
  date: Date;
}
