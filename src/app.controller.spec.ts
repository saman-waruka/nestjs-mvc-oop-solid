import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseUsersDTO } from './dto/ResponseUsers.dto';
describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('Get /users with q params', () => {
    it('should return response', async () => {
      // expect(appController.getUsers({ q:'12' })).toReturn();
      const res = await appController.getUsers({ q:'12' });
      // console.log( { res })
      expect(res).toMatchObject(ResponseUsersDTO);
    });
  });

  describe('Get /users without q params ', () => {
    it('should throw error', () => {
      expect(appController.getUsers({ q: undefined,  page:1 })).toThrowError();
    });
  });
});
