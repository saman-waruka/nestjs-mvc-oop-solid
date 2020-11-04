export class UserDTO {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url:string;
  type: string;
  site_admin: boolean;
  score: number
  constructor(data: UserDTO){
    const { login, id, node_id , avatar_url , gravatar_id , url , html_url , followers_url, following_url , gists_url, starred_url, subscriptions_url, organizations_url, repos_url, events_url, received_events_url, type, site_admin, score} = data;
    this.login=  login;
    this.id= id;
    this.node_id= node_id;
    this.avatar_url= avatar_url;
    this.gravatar_id= gravatar_id;
    this.url= url;
    this.html_url= html_url;
    this.followers_url= followers_url;
    this.following_url= following_url;
    this.gists_url= gists_url;
    this.starred_url= starred_url;
    this.subscriptions_url= subscriptions_url;
    this.organizations_url= organizations_url;
    this.repos_url= repos_url;
    this.events_url= events_url;
    this.received_events_url=received_events_url;
    this.type= type;
    this.site_admin= site_admin;
    this.score= score
  }
}