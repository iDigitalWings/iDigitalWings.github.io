import{_ as t,a as e,o as a,aj as r}from"./chunks/framework.Ba_Ek9Jm.js";const g=JSON.parse('{"title":"SpringOauth","description":"","frontmatter":{"title":"SpringOauth","date":"2018-05-24T00:00:00.000Z","tags":["pac4j"],"category":["Java"]},"headers":[],"relativePath":"posts/2018/05/2018-05-24-spring-oauth2.md","filePath":"posts/2018/05/2018-05-24-spring-oauth2.md","lastUpdated":1718175555000}'),s={name:"posts/2018/05/2018-05-24-spring-oauth2.md"},o=r('<p>password 验证</p><p><a href="https://dzone.com/articles/secure-spring-rest-with-spring-security-and-oauth2" target="_blank" rel="noreferrer">https://dzone.com/articles/secure-spring-rest-with-spring-security-and-oauth2</a></p><p>curl -X POST <br><a href="http://127.0.0.1:8080/oauth/token" target="_blank" rel="noreferrer">http://127.0.0.1:8080/oauth/token</a> <br> -H &#39;authorization: Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==&#39; <br> -F grant_type=password <br> -F username=admin <br> -F password=admin1234 <br> -F client_id=spring-security-oauth2-read-write-client</p><p>Use <code>DaoAuthenticationProvider</code> to find user:</p>',4),n=[o];function p(i,c,d,_,h,u){return a(),e("div",null,n)}const m=t(s,[["render",p]]);export{g as __pageData,m as default};
