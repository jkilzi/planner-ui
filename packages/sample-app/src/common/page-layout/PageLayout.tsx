import React from "react";
import {
  Divider,
  PageSection,
  PageBreadcrumb,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbItemProps,
} from "@patternfly/react-core";
import {
  PageHeader,
  PageHeaderTitle,
} from "@redhat-cloud-services/frontend-components/PageHeader";
import { PageHeaderCaption } from "./components/PageHeaderCaption";

type Props = {
  title: React.ReactNode;
  caption?: React.ReactNode;
  breadcrumbs?: Array<BreadcrumbItemProps>;
};

export const PageLayout: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { title, caption, breadcrumbs, children } = props;

  return (
    <main id="am-main-layout">
      <PageBreadcrumb>
        <Breadcrumb>
          {breadcrumbs?.map(({ children, ...bcProps }) => (
            <BreadcrumbItem {...bcProps}>{children}</BreadcrumbItem>
          ))}
        </Breadcrumb>
      </PageBreadcrumb>
      <PageHeader>
        <PageHeaderTitle title={title} />
        <PageHeaderCaption>{caption}</PageHeaderCaption>
      </PageHeader>
      <Divider />
      <PageSection>{children}</PageSection>
    </main>
  );
};
