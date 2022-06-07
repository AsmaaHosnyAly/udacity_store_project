import { User, UserStore } from '../../models/user';
import Client from '../../database';
import { userList, userListWithIdAndNoPwd } from '../helpers/userTestData';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import _ from 'lodash';




const userModel=new UserStore();
describe('Authentication module', () => {
    describe ('Test methods exits', () => {
        it('should have an authenticate user method ',()=>{
            expect(userModel.authenticate).toBeDefined();
        });   
    });
});

describe('Test authentication logic', () => {
   const user={
    username: 'Asmaa_hosny',
    firstName: 'Asmaa',
    lastName: 'Hosny',
    password: '1223456'
   }as User
  beforeAll(async ()=>{
      const createUser=await userModel.create(user);
      user.id=createUser.id;
    });
    

    it('authenticate should return null for the wrong credentials', async () => {
        const result = await userModel.authenticate('Asmaa_hosny', '12234567');
    
        expect(result).toBe(null);
      });
    
      it('authenticate method should return the authenticate user', async () => {
        const result = await userModel.authenticate('Asmaa_hosny', '1223456');
        const resultWithoutPwd = _.pick(result, [
          'id',
          'username',
          'firstName',
          'lastName'
        ]);
    
        expect(resultWithoutPwd).toEqual(userListWithIdAndNoPwd[0]);
      });
    
      afterAll(async () => {
        const connection = await Client.connect();
        await connection.query('DELETE FROM users;');
        await connection.query('ALTER SEQUENCE users_id_seq RESTART WITH 1;');
        connection.release();
      });
    afterAll(async () => {
        const connection = await Client.connect();
        await connection.query('DELETE FROM users;');
        await connection.query('ALTER SEQUENCE users_id_seq RESTART WITH 1;');
        connection.release();
      });
    });
    


