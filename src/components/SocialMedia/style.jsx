import styled from 'styled-components';
import { theme } from '../../theme';
import { IconBrandGithub } from '@tabler/icons';
import { IconBrandInstagram } from '@tabler/icons';
import { IconMail } from '@tabler/icons';

export const FiendMeOn = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
    margin: 20px 0;
`;

export const SocialNetworks = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const GitLogo = styled(IconBrandGithub)`
    width: 25px;
    height: 25px;
    color: ${ theme.tealSea5 };
`

export const InstaLogo = styled(IconBrandInstagram)`
    width: 25px;
    height: 25px;
    color: ${ theme.tealSea5 };
`

export const MailLogo = styled(IconMail)`
    width: 25px;
    height: 25px;
    color: ${ theme.tealSea5 };
`