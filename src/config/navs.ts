import {
  AcademicCapIcon,
  DocumentTextIcon,
  HeartIcon,
  HomeIcon,
  RocketLaunchIcon,
  ShareIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline'

export const defaultMainNav = [
  {
    name: 'common:navs.defaultMainNav.doc',
    href: '/doc/',
  },
]

export const commonFooterNav = [
  {
    name: 'common:navs.commonFooterNav.doc',
    href: '/doc/',
  },
  {
    name: 'common:navs.commonFooterNav.privacy',
    href: '/legal/privacy-policy/',
  },
]

export const docMenuNav = [
  { name: 'doc:menuNav.home', href: '/doc/', icon: HomeIcon },
  {
    name: 'doc:menuNav.what-is-zapp.groupTitle',
    children: [
      {
        name: 'doc:menuNav.what-is-zapp.motivation',
        href: '/doc/what-is-zapp/motivation/',
        icon: HeartIcon,
      },
      {
        name: 'doc:menuNav.what-is-zapp.keep-improving',
        href: '/doc/what-is-zapp/keep-improving/',
        icon: HeartIcon,
      },
      {
        name: 'doc:menuNav.what-is-zapp.dev-environment',
        href: '/doc/what-is-zapp/dev-environment/',
        icon: HeartIcon,
      },
    ],
  },
  {
    name: 'doc:menuNav.quickstart',
    href: '/doc/getting-started/quickstart/',
    icon: RocketLaunchIcon,
  },
  {
    name: 'doc:menuNav.tutorial.groupTitle',
    children: [
      {
        name: 'doc:menuNav.tutorial.introduction',
        href: '/doc/tutorial/introduction/',
        icon: AcademicCapIcon,
      },
      {
        name: 'doc:menuNav.tutorial.execute-scaffold',
        href: '/doc/tutorial/execute-scaffold/',
        icon: AcademicCapIcon,
      },
      {
        name: 'doc:menuNav.tutorial.define-entity',
        href: '/doc/tutorial/define-entity/',
        icon: AcademicCapIcon,
      },
      {
        name: 'doc:menuNav.tutorial.migration',
        href: '/doc/tutorial/migration/',
        icon: AcademicCapIcon,
      },
      {
        name: 'doc:menuNav.tutorial.define-mutation',
        href: '/doc/tutorial/define-mutation/',
        icon: AcademicCapIcon,
      },
      {
        name: 'doc:menuNav.tutorial.deploy-to-cloud-run',
        href: '/doc/tutorial/deploy-to-cloud-run/',
        icon: AcademicCapIcon,
      },
    ],
  },

  {
    name: 'doc:menuNav.api-reference.groupTitle',
    children: [
      {
        name: 'doc:menuNav.api-reference.compute',
        href: '/doc/api-reference/compute/',
        icon: DocumentTextIcon,
      },
      {
        name: 'doc:menuNav.api-reference.db',
        href: '/doc/api-reference/db/',
        icon: DocumentTextIcon,
      },
      {
        name: 'doc:menuNav.api-reference.docker',
        href: '/doc/api-reference/docker/',
        icon: DocumentTextIcon,
      },
      {
        name: 'doc:menuNav.api-reference.g',
        href: '/doc/api-reference/g/',
        icon: DocumentTextIcon,
      },
      {
        name: 'doc:menuNav.api-reference.gcloud',
        href: '/doc/api-reference/gcloud/',
        icon: DocumentTextIcon,
      },
      {
        name: 'doc:menuNav.api-reference.gh',
        href: '/doc/api-reference/gh/',
        icon: DocumentTextIcon,
      },
      {
        name: 'doc:menuNav.api-reference.iam',
        href: '/doc/api-reference/iam/',
        icon: DocumentTextIcon,
      },
      {
        name: 'doc:menuNav.api-reference.init',
        href: '/doc/api-reference/init/',
        icon: DocumentTextIcon,
      },
      {
        name: 'doc:menuNav.api-reference.new',
        href: '/doc/api-reference/new/',
        icon: DocumentTextIcon,
      },
      {
        name: 'doc:menuNav.api-reference.run',
        href: '/doc/api-reference/run/',
        icon: DocumentTextIcon,
      },
      {
        name: 'doc:menuNav.api-reference.sql',
        href: '/doc/api-reference/sql/',
        icon: DocumentTextIcon,
      },
    ],
  },
  {
    name: 'doc:menuNav.dependencies.groupTitle',
    children: [
      {
        name: 'doc:menuNav.dependencies.install-gcloud-sdk',
        href: '/doc/dependencies/install-gcloud-sdk/',
        icon: ShareIcon,
      },
      {
        name: 'doc:menuNav.dependencies.install-gh-cli',
        href: '/doc/dependencies/install-gh-cli/',
        icon: ShareIcon,
      },
      {
        name: 'doc:menuNav.dependencies.install-docker',
        href: '/doc/dependencies/install-docker/',
        icon: ShareIcon,
      },
      {
        name: 'doc:menuNav.dependencies.install-sea-orm',
        href: '/doc/dependencies/install-sea-orm/',
        icon: ShareIcon,
      },
    ],
  },
  {
    name: 'doc:menuNav.release.groupTitle',
    children: [
      {
        name: 'doc:menuNav.release.roadmap',
        href: '/doc/release/roadmap/',
        icon: SwatchIcon,
      },
      {
        name: 'doc:menuNav.release.release-history',
        href: '/doc/release/release-history/',
        icon: SwatchIcon,
      },
    ],
  },
]

export const docHeaderNav = [
  {
    name: 'doc:headerNav.home',
    href: '/',
  },
]
