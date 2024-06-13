import{_ as d}from"./chunks/ArticleMetadata.DFebsEEb.js";import{_ as g,m as h,a as f,u as i,B as c,e,x as u,aj as m,o,p as l,q as p}from"./chunks/framework.Ba_Ek9Jm.js";import"./chunks/theme.DmmjVCNk.js";const I=JSON.parse('{"title":"Spring Security Errors","description":"","frontmatter":{"title":"Spring Security Errors","date":"2018-06-25T00:00:00.000Z","tags":["spring","security"]},"headers":[],"relativePath":"posts/2018/06/2018-06-28-spring-security-oauth.md","filePath":"posts/2018/06/2018-06-28-spring-security-oauth.md","lastUpdated":1718187682000}'),b={name:"posts/2018/06/2018-06-28-spring-security-oauth.md"},_=e("p",null,"凌乱一对错",-1),y=e("h1",{id:"bean-method-clientregistrationrepository-not-loaded-because-oauth2-clients-configured-condition-registered-clients-is-not-available",tabindex:"-1"},[u("Bean method 'clientRegistrationRepository' not loaded because OAuth2 Clients Configured Condition registered clients is not available "),e("a",{class:"header-anchor",href:"#bean-method-clientregistrationrepository-not-loaded-because-oauth2-clients-configured-condition-registered-clients-is-not-available","aria-label":`Permalink to "Bean method 'clientRegistrationRepository' not loaded because OAuth2 Clients Configured Condition registered clients is not available"`},"​")],-1),A=e("p",null,[e("a",{href:"https://github.com/spring-projects/spring-boot/issues/12654",target:"_blank",rel:"noreferrer"},"https://github.com/spring-projects/spring-boot/issues/12654")],-1),E=e("p",null,[e("a",{href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-security-oauth2-client",target:"_blank",rel:"noreferrer"},"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-security-oauth2-client")],-1),v=e("p",null,"配置格式更新了",-1),C=e("h1",{id:"caused-by-java-lang-classnotfoundexception-org-springframework-security-oauth2-client-web-oauth2loginauthenticationfilter",tabindex:"-1"},[u("Caused by: java.lang.ClassNotFoundException: org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter "),e("a",{class:"header-anchor",href:"#caused-by-java-lang-classnotfoundexception-org-springframework-security-oauth2-client-web-oauth2loginauthenticationfilter","aria-label":'Permalink to "Caused by: java.lang.ClassNotFoundException: org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter"'},"​")],-1),S=m(`<p>compile &#39;org.springframework.security:spring-security-oauth2-client&#39;</p><h2 id="order" tabindex="-1">order <a class="header-anchor" href="#order" aria-label="Permalink to &quot;order&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>Caused by: java.lang.IllegalStateException: @Order on WebSecurityConfigurers must be unique. Order of 100 was already used on cn.com.shuyi.cbt.oauth.client.UiSecurityConfig$$EnhancerBySpringCGLIB$$eb64ae96@d34cee7, so it cannot be used on cn.com.shuyi.cbt.oauth.client.config.Config1$$EnhancerBySpringCGLIB$$5225a823@2057c0e2 too.</span></span>
<span class="line"><span>	at org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration.setFilterChainProxySecurityConfigurer(WebSecurityConfiguration.java:148) ~[spring-security-config-5.0.6.RELEASE.jar:5.0.6.RELEASE]</span></span>
<span class="line"><span>	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at java.lang.reflect.Method.invoke(Method.java:498) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredMethodElement.inject(AutowiredAnnotationBeanPostProcessor.java:699) ~[spring-beans-5.0.7.RELEASE.jar:5.0.7.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:91) ~[spring-beans-5.0.7.RELEASE.jar:5.0.7.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessPropertyValues(AutowiredAnnotationBeanPostProcessor.java:373) ~[spring-beans-5.0.7.RELEASE.jar:5.0.7.RELEASE]</span></span>
<span class="line"><span>	... 23 common frames omitted</span></span></code></pre></div>`,3);function k(t,j,w,$,P,B){const s=d,r=h("ClientOnly");return o(),f("div",null,[_,y,i(r,null,{default:c(()=>{var a,n;return[(((a=t.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=t.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(o(),l(s,{key:0,article:t.$frontmatter},null,8,["article"])):p("",!0)]}),_:1}),A,E,v,C,i(r,null,{default:c(()=>{var a,n;return[(((a=t.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=t.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(o(),l(s,{key:0,article:t.$frontmatter},null,8,["article"])):p("",!0)]}),_:1}),S])}const L=g(b,[["render",k]]);export{I as __pageData,L as default};
