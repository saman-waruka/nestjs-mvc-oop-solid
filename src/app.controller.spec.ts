import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseUsersDTO } from './dto/ResponseUsers.dto';
import axios, { AxiosResponse } from 'axios';
import { UnprocessableEntityException, UnsupportedMediaTypeException } from '@nestjs/common';



describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  beforeEach(async () => {
    // const app: TestingModule = await Test.createTestingModule({
    //   controllers: [AppController],
    //   providers: [AppService],
    // }).compile();

    // appController = app.get<AppController>(AppController);

    appService = new AppService();
    appController = new AppController(appService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('Get /users with q params', () => {
    it('should return response', async () => {
      const mockResponseData = {
        "total_count": 1,
        "incomplete_results": false,
        "items":[
          {
            "login": "2kranki",
            "id": 2272325,
            "node_id": "MDQ6VXNlcjIyNzIzMjU=",
            "avatar_url": "https://avatars1.githubusercontent.com/u/2272325?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/2kranki",
            "html_url": "https://github.com/2kranki",
            "followers_url": "https://api.github.com/users/2kranki/followers",
            "following_url": "https://api.github.com/users/2kranki/following{/other_user}",
            "gists_url": "https://api.github.com/users/2kranki/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/2kranki/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/2kranki/subscriptions",
            "organizations_url": "https://api.github.com/users/2kranki/orgs",
            "repos_url": "https://api.github.com/users/2kranki/repos",
            "events_url": "https://api.github.com/users/2kranki/events{/privacy}",
            "received_events_url": "https://api.github.com/users/2kranki/received_events",
            "type": "User",
            "site_admin": false,
            "score": 1
        }
        ]
      }
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get = jest.fn().mockResolvedValue(mockResponseData);
      jest.spyOn(appService,'getUsers').mockImplementation(() => mockedAxios.get('any-url'))
      const controllerCalledService = await appController.getUsers({ q : "123"});
      expect(controllerCalledService).toEqual(mockResponseData);
    });
  });

  describe('Get /users without q params ', () => {
    it('should throw error', async () => {
      expect(appController.getUsers({ q: "",  page:1 })
      ).rejects.toThrow();
      // expect(t).toThrow(UnprocessableEntityException);
    });
  });
});
