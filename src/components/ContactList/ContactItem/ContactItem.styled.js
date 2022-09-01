import styled from "styled-components";

export const Info = styled.p`
display: inline-block; 
margin-right: ${p => p.theme.space[3]}px;
min-width: 200px;
`;

export const Button = styled.button`
padding-top:  ${p => p.theme.space[1]}px;
padding-bottom: ${p => p.theme.space[1]}px;
padding-left:  ${p => p.theme.space[3]}px;
padding-right:  ${p => p.theme.space[3]}px;
border-radius: ${p => p.theme.radii.md};
border-color: ${p => p.theme.colors.primary};
background-color: ${p => p.theme.colors.primary};
color: ${p => p.theme.colors.white};

:hover, :focus {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.white};
    };
`;