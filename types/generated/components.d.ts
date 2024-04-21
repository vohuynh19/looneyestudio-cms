import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'manyToMany';
  };
  attributes: {
    isExternal: Attribute.Boolean;
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.link': ComponentsLink;
    }
  }
}
