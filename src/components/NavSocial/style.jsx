import styled from 'styled-components';
import { theme } from '../../theme';
import { IconBrandGithub } from '@tabler/icons';
import { IconBrandInstagram } from '@tabler/icons';
import { IconMail } from '@tabler/icons';
import { IconWorld } from '@tabler/icons';
import { IconBrandLinkedin } from '@tabler/icons';

export const GitLogo = styled(IconBrandGithub)`
    width: 25px;
    height: 25px;
    color: ${ theme.tealSea5 };
`

export const LinkedinLogo = styled(IconBrandLinkedin)`
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
    cursor: pointer;
    color: ${ theme.tealSea5 };
`

export const WorldIcon = styled(IconWorld)`
    width: 25px;
    height: 25px;
    color: ${ theme.tealSea5 };
`;