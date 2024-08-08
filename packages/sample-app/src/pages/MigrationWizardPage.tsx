import React from "react";
import { PageLayout } from "../common/page-layout/PageLayout";
import { MigrationWizard } from "../common/MigrationWizard";

export const MigrationWizardPage: React.FC = () => {
  return (
    <PageLayout
      breadcrumbs={[
        { to: "#", children: "VMware to OpenShift migration" },
        { to: "#", children: "Migration guide", isActive: true },
      ]}
      title="Evaluate VMware to OpenShift migration"
      caption={
        <p>
          This step-by-step guide will help you asses VMs in your VMware vCenter
          and provide you with a migration readiness report <br />
          By the end of this process we'll guide you through the steps required
          for creating the OpenShift cluster that will orchestrate the migrated
          VMs (Yuval we need a copyrighter for all these texts 💩)
        </p>
      }
    >
      <MigrationWizard />
    </PageLayout>
  );
};
