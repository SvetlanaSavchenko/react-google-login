// Type definitions for react-google-login v2.5.4
// Project: https://github.com/anthonyjgrove/react-google-login
// Definitions by: Ruslan Ibragimov <https://github.com/IRus>
import {Component, ReactNode, CSSProperties} from 'react';

declare namespace ReactGoogleLogin {

  interface AuthResponse {
     access_token: string;
     id_token: string;
     login_hint: string;
     scope: string;
     expires_in: number;
     first_issued_at: number;
     expires_at: number;
  }

  interface BasicProfile {
    getId(): string;
    getEmail(): string;
    getName(): string;
    getGivenName(): string;
    getFamilyName(): string;
    getImageUrl(): string;
  }

  // Based on https://developers.google.com/identity/sign-in/web/reference
  export interface GoogleLoginResponse {
    getBasicProfile(): BasicProfile;
    getAuthResponse(): AuthResponse;
    getGrantedScopes(): string;
    getHostedDomain(): string;
    getId(): string;
    isSignedIn(): boolean;
    hasGrantedScopes(scopes: string): boolean;
    disconnect(): void;
    grantOfflineAccess(options: GrantOfflineAccessOptions): Promise<GoogleLoginResponseOffline>;
    signIn(options: SignInOptions): Promise<any>;
    grant(options: SignInOptions): Promise<any>;
  }

  interface GrantOfflineAccessOptions {
     scope?: string;
     redirect_uri?: string;
  }

  interface SignInOptions {
     scope?: string;
     app_package_name?: string;
     fetch_basic_profile?: boolean;
     prompt?: string;
  }

  export interface GoogleLoginResponseOffline {
     code: string;
  }

  export interface GoogleLoginProps {
     onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void,
     onFailure: (error: any) => void,
     clientId: string,
     onRequest?: () => void,
     buttonText?: string,
     offline?: boolean,
     scope?: string,
     className?: string,
     redirectUri?: string,
     cookiePolicy?: string,
     loginHint?: string,
     hostedDomain?: string,
     children?: ReactNode,
     style?: CSSProperties,
     approvalPrompt?: string,
     tag?: string;
  }

  export default class GoogleLogin extends Component<GoogleLoginProps, {}> {
  }
}

export = ReactGoogleLogin;
