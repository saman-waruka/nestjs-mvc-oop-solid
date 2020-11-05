// export class UserDTO {
//   protected login: string;
//   protected id: number;
//   protected node_id: string;
//   protected avatar_url: string;
//   protected gravatar_id: string;
//   protected url: string;
//   protected html_url: string;
//   protected followers_url: string;
//   protected following_url: string;
//   protected gists_url: string;
//   protected starred_url: string;
//   protected subscriptions_url: string;
//   protected organizations_url: string;
//   protected repos_url: string;
//   protected events_url: string;
//   protected received_events_url:string;
//   protected type: string;
//   protected site_admin: boolean;
//   protected score: number
//   constructor(data: UserDTO){
//     const { login, id, node_id , avatar_url , gravatar_id , url , html_url , followers_url, following_url , gists_url, starred_url, subscriptions_url, organizations_url, repos_url, events_url, received_events_url, type, site_admin, score} = data;
//     this.login=  login;
//     this.id= id;
//     this.node_id= node_id;
//     this.avatar_url= avatar_url;
//     this.gravatar_id= gravatar_id;
//     this.url= url;
//     this.html_url= html_url;
//     this.followers_url= followers_url;
//     this.following_url= following_url;
//     this.gists_url= gists_url;
//     this.starred_url= starred_url;
//     this.subscriptions_url= subscriptions_url;
//     this.organizations_url= organizations_url;
//     this.repos_url= repos_url;
//     this.events_url= events_url;
//     this.received_events_url=received_events_url;
//     this.type= type;
//     this.site_admin= site_admin;
//     this.score= score
//   }
// }


export class UserDTO {
  protected login: string;
  protected id: number;
  protected node_id: string;
  protected avatar_url: string;
  protected gravatar_id: string;
  protected url: string;
  protected html_url: string;
  protected followers_url: string;
  protected following_url: string;
  protected gists_url: string;
  protected starred_url: string;
  protected subscriptions_url: string;
  protected organizations_url: string;
  protected repos_url: string;
  protected events_url: string;
  protected received_events_url:string;
  protected type: string;
  protected site_admin: boolean;
  protected score: number
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
  static create(data: UserDTO): UserDTO {
    return new UserDTO(data);
  }
}