import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser, UserInfo, Contact, ContactRequest, ContactRequestCreation } from '../../intefaces/user.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Hobby, NewHobby } from '../../intefaces/hobby.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/protected/api/user'
  private baseUrl: string = environment.apiUrl + this.apiUrl;

  constructor(private http: HttpClient) { }

  public createUserIfDontExist(user: AppUser, token: string): Observable<AppUser> {
    const url = `${this.baseUrl}/create-user-if-not-exist`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<AppUser>(url, user, { headers });
  }

  public getUserContacts(userId: string, token: string): Observable<Contact[]> {
    const url = `${this.baseUrl}/${userId}/contact`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Contact[]>(url, { headers });
  }

  public createContactRequest(request: ContactRequestCreation, token: string): Observable<ContactRequest> {
    const url = `${this.baseUrl}/contact-request`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<ContactRequest>(url, request, { headers });
  }

  public getAllUserContactRequests(userId: string, token: string): Observable<ContactRequest[]> {
    const url = `${this.baseUrl}/${userId}/sent-contact-requests`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ContactRequest[]>(url, { headers });
  }

  public getReceivedContactRequests(userId: string, token: string): Observable<ContactRequest[]> {
    const url = `${this.baseUrl}/${userId}/received-contact-requests`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ContactRequest[]>(url, { headers });
  }

  public acceptContactRequest(userId: string, contactRequest: ContactRequest, token: string): Observable<Contact> {
    const url = `${this.baseUrl}/${userId}/received-contact-requests/accept`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<Contact>(url, contactRequest, { headers });
  }
  
  public refuseContactRequest(userId: string, contactRequest: ContactRequest, token: string): Observable<boolean> {
    const url = `${this.baseUrl}/${userId}/received-contact-requests/refuse`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<boolean>(url, contactRequest, { headers });
  }

  public cancelSentContactRequest(userId: string, contactRequestId: string, token: string): Observable<boolean> {
    const url = `${this.baseUrl}/${userId}/sent-contact-requests/cancel/${contactRequestId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<boolean>(url , { headers });
  }

  // on pourrait implémenter un systeme de recommandation de contact avec les memes caractèristiques que le user actuel
  public getContactSuggestions(userId: string, token: string): Observable<Contact[]> {
    const url = `${this.baseUrl}/${userId}/suggested-contact`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Contact[]>(url, { headers });
  }

  public changeUserInfo(userId: string, userInfo: UserInfo, token: string): Observable<AppUser> {
    const url = `${this.baseUrl}/${userId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<AppUser>(url, userInfo, { headers });
  }

  // validation pour vérifier que le username n'existe pas deja chez un autre utilisateur. méthode à utiliser avant changeUserInfo
  public validateNewUserName(userId: string, newUserName: string, token: string) : Observable<boolean> {
    const url = `${this.baseUrl}/${userId}/new-user-name/${newUserName}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<boolean>(url, { headers });
  }

  public getAllUserHobbies(userId: string, token: string): Observable<Hobby[]> {
    const url = `${this.baseUrl}/${userId}/hobbies`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Hobby[]>(url, { headers });
  }

  public updateUserHobby(userId: string, hobby: Hobby, token: string): Observable<Hobby> {
    const url = `${this.baseUrl}/${userId}/hobby`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<Hobby>(url, hobby, { headers });
  }

  public deleteUserHobby(userId: string, hobbyId: string, token: string): Observable<boolean> {
    const url = `${this.baseUrl}/${userId}/hobby/${hobbyId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<boolean>(url, { headers });
  }

  public addUserHobby(userId: string, hobby: NewHobby, token: string): Observable<Hobby> {
    const url = `${this.baseUrl}/${userId}/hobby`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Hobby>(url, hobby, { headers });
  }

}
