import { AppService } from './app.service';
import axios, { AxiosResponse } from 'axios';
import { ResponseUsersDTO } from './dto/ResponseUsers.dto';

const data = {
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
const mockResponseData = { data };


describe('AppService', () => {
  let appService: AppService;
  beforeEach(async () => {
    appService = new AppService();
  });


  describe('getUsers()', () => {
    it('should return response', async () => {
      const mockedAxios = axios as jest.Mocked<typeof axios>;
      mockedAxios.get = jest.fn().mockResolvedValue(mockResponseData);
      const result = await appService.getUsers('q=1234567').then((res: ResponseUsersDTO)=> res).catch(err=> console.log({ err}));
      expect(result).toEqual(data);
    });
  });

  describe('getHello', () => {
    it('should return hello world!', async () => {
      jest.mock('axios');
      expect(appService.getHello()).toBe('Hello World!');
    });
  });


});
