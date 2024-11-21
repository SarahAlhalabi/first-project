import React from "react";
import * as Components from './Components';

function App() {
    const [signIn, toggle] = React.useState(true);

    return (
        <Components.PageBackground>
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Login</Components.Title>
                        <Components.Input type='email' placeholder='User Name' />
                        <Components.Input type='password' placeholder='Password' />
                        <Components.Anchor href='#'>Forget your password?</Components.Anchor>
                        <Components.Button>Login</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>
                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>Sign In</Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome to our medical center</Components.Title>
                            <Components.Paragraph>
                                Please provide your personal information to create an account
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>Sign Up</Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </Components.PageBackground>
    );
}

export default App;