package com.cognizant.spring_learn.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import com.cognizant.spring_learn.exception.JwtAuthenticationEntryPoint;
import com.cognizant.spring_learn.filter.JwtAuthenticationFilter;
import com.cognizant.spring_learn.filter.JwtAuthorizationFilter;

@Configuration
public class SecurityConfig {

	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	
	@Bean
	SecurityFilterChain filterChain(HttpSecurity http,AuthenticationManager authenticationManager) throws Exception{
		http
		.csrf(csrf -> csrf.disable())
		.exceptionHandling(exception -> exception.authenticationEntryPoint(jwtAuthenticationEntryPoint))
		.authorizeHttpRequests(auth -> auth
				.requestMatchers("/authenticate")
				.permitAll().anyRequest().authenticated())
		.addFilter(new JwtAuthenticationFilter(authenticationManager))
		.addFilter(new JwtAuthorizationFilter(authenticationManager))
		.httpBasic(Customizer.withDefaults());
		
		return http.build();
	}
	
	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception{
		return authenticationConfiguration.getAuthenticationManager();
	}
	
	@Bean
	public InMemoryUserDetailsManager userDetailsService() {
		
		UserDetails user = User.withDefaultPasswordEncoder().username("user").password("pwd").roles("USER").build();
		
		UserDetails admin = User.withDefaultPasswordEncoder().username("admin").password("pwd").roles("ADMIN").build();
		
		return new InMemoryUserDetailsManager(user,admin);
		
	}
}

