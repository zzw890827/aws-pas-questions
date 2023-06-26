# AWS MLS 1-65

1. A global enterprise is running SAP ERP Central Component (SAP ECC) workloads on Oracle in an on-premises environment. The enterprise plans to migrate to SAP S/4HANA on AWS.The enterprise recently acquired two other companies. One of the acquired companies is running SAP ECC on Oracle as its ERP system. The other acquired company is running an ERP system that is not from SAP. The enterprise wants to consolidate the three ERP systems into one ERP system on SAP S/4HANA on AWS. Not all the data from the acquired companies needs to be migrated to the final ERP system. The enterprise needs to complete this migration with a solution that minimizes cost and maximizes operational efficiency.
Which solution will meet these requirements?

   - [ ] A. Perform a lift-and-shift migration of all the systems to AWS. Migrate the ERP system that is not from SAP to SAP ECC. Convert all three systems to SAP S/4HANA by using SAP Software Update Manager (SUM) Database Migration Option (DMO). Consolidate all three SAP S/4HANA systems into a final SAP S/4HANA system. Decommission the other systems.
   - [ ] B. Perform a lift-and-shift migration of all the systems to AWS. Migrate the enterprise's initial system to SAP HANA, and then perform a conversion to SAP S/4HANA. Consolidate the two systems from the acquired companies with this SAP S/4HANA system by using the Selective Data Transition approach with SAP Data Management and Landscape Transformation (DMLT).
   - [ ] C. Use SAP Software Update Manager (SUM) Database Migration Option (DMO) with System Move to re-architect the enterprise’s initial system to SAP S/4HANA and to change the platform to AWS. Consolidate the two systems from the acquired companies with this SAP S/4HANA system by using the Selective Data Transition approach with SAP Data Management and Landscape Transformation (DMLT).
   - [ ] D. Use SAP Software Update Manager (SUM) Database Migration Option (DMO) with System Move to re-architect all the systems to SAP S/4HANA and to change the platform to AWS. Consolidate all three SAP S/4HANA systems into a final SAP S/4HANA system. Decommission the other systems..

   <details>
      <summary>Answer</summary>

      C.

   </details>

2. A global retail company is running its SAP landscape on AWS. Recently, the company made changes to its SAP Web Dispatcher architecture. The company added an additional SAP Web Dispatcher for high availability with an Application Load Balancer (ALB) to balance the load between the two SAP Web Dispatchers.When users try to access SAP through the ALB, the system is reachable. However, the SAP backend system is showing an error message. An investigation reveals that the issue is related to SAP session handling and distribution of requests. The company confirmed that the system was working as expected with one SAP Web Dispatcher. The company replicated the configuration of that SAP Web Dispatcher to the new SAP Web Dispatcher.How can the company resolve the error?

   - [ ] A. Maintain persistence by using session cookies. Enable session stickiness (session affinity) on the SAP Web Dispatchers by setting the wdisp/HTTP/esid_support parameter to True.
   - [ ] B. Maintain persistence by using session cookies. Enable session stickiness (session affinity) on the ALB.
   - [ ] C. Turn on host-based routing on the ALB to route traffic between the SAP Web Dispatchers.
   - [ ] D. Turn on URL-based routing on the ALB to route traffic to the application based on URL.

   <details>
      <summary>Answer</summary>

      B.

   </details>

3. A company hosts its SAP NetWeaver workload on SAP HANA in the AWS Cloud. The SAP NetWeaver application is protected by a cluster solution that uses Red Hat Enterprise Linux. High Availability Add-On. The cluster solution uses an overlay IP address to ensure that the high availability cluster is still accessible during failover scenarios.An SAP solutions architect needs to facilitate the network connection to this overlay IP address from multiple locations. These locations include more than 25 VPCs, other AWS Regions, and the on-premises environment. The company already has set up an AWS Direct Connect connection between the on-premises environment and AWS. What should the SAP solutions architect do to meet these requirements in the MOST scalable manner?

   - [ ] A. Use VPC peering between the VPCs to route traffic between them.
   - [ ] B. Use AWS Transit Gateway to connect the VPCs and on-premises networks together. Most Voted
   - [ ] C. Use a Network Load Balancer to route connections to various targets within VPCs.
   - [ ] D. Deploy a Direct Connect gateway to connect the Direct Connect connection over a private VIF to one or more VPCs in any accounts.
   <details>
      <summary>Answer</summary>

      B.

   </details>

4. A company is implementing SAP HANA on AWS. According to the company’s security policy, SAP backups must be encrypted. Only authorized team members can have the ability to decrypt the SAP backups. What is the MOST operationally efficient solution that meets these requirements?

   - [ ] A. Configure AWS Backint Agent for SAP HANA to create SAP backups in an Amazon S3 bucket. After a backup is created, encrypt the backup by using client-side encryption. Share the encryption key with authorized team members only.
   - [ ] B. Configure AWS Backint Agent for SAP HANA to use AWS Key Management Service (AWS KMS) for SAP backups. Create a key policy to grant decryption permission to authorized team members only.
   - [ ] C. Configure AWS Storage Gateway to transfer SAP backups from a file system to an Amazon S3 bucket. Use an S3 bucket policy to grant decryption permission to authorized team members only.
   - [ ] D. Configure AWS Backint Agent for SAP HANA to use AWS Key Management Service (AWS KMS) for SAP backups. Grant object ACL decryption permission to authorized team members only.

   <details>
      <summary>Answer</summary>

      B.

   </details>

5. A data analysis company has two SAP landscapes that consist of sandbox, development, QA, pre-production, and production servers. One landscape is on Windows, and the other landscape is on Red Hat Enterprise Linux. The servers reside in a room in a building that other tenants share. An SAP solutions architect proposes to migrate the SAP applications to AWS. The SAP solutions architect wants to move the production backups to AWS and wants to make the backups highly available to restore in case of unavailability of an on-premises server. Which solution will meet these requirements MOST cost-effectively?
   - [ ] A. Take a backup of the production servers. Implement an AWS Storage Gateway Volume Gateway. Create file shares by using the Storage Gateway Volume Gateway. Copy the backup files to the file shares through NFS and SMB.
   - [ ] B. Take a backup of the production servers. Send those backups to tape drives. Implement an AWS Storage Gateway Tape Gateway. Send the backups to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) through the S3 console. Move the backups immediately to S3 Glacier Deep Archive.
   - [ ] C. Implement a third-party tool to take images of the SAP application servers and database server. Take regular snapshots at 1-hour intervals. Send the snapshots to Amazon S3 Glacier directly through the S3 Glacier console. Store the same images in different S3 buckets in different AWS Regions.
   - [ ] D. Take a backup of the production servers. Implement an Amazon S3 File Gateway. Create file shares by using the S3 File Gateway. Copy the backup files to the file shares through NFS and SMB. Map backup files directly to Amazon S3. Configure an S3 Lifecycle policy to send the backup files to S3 Glacier based on the company’s data retention policy.

   <details>
      <summary>Answer</summary>

      D.

   </details>

6. A company’s SAP basis team is responsible for database backups in Amazon S3. The company frequently needs to restore the last 3 months of backups into the pre-production SAP system to perform tests and analyze performance. Previously, an employee accidentally deleted backup files from the S3 bucket. The SAP basis team wants to prevent accidental deletion of backup files in the future. Which solution will meet these requirements?
   - [ ] A. Create a new resource-based policy that prevents deletion of the S3 bucket.
   - [ ] B. Enable versioning and multi-factor authentication (MFA) on the S3 bucket.
   - [ ] C. Create signed cookies for the backup files in the S3 bucket. Provide the signed cookies to authorized users only.
   - [ ] D. Apply an S3 Lifecycle policy to move the backup files immediately to S3 Glacier.

    <details>
      <summary>Answer</summary>

      B.

   </details>

7. A company wants to run SAP HANA on AWS in the eu-central-1 Region. The company must make the SAP HANA system highly available by using SAP HANA system replication. In addition, the company must create a disaster recovery (DR) solution that uses SAP HANA system replication in the eu-west-1 Region. As prerequisites, the company has confirmed that Inter-AZ latency is less than 1 ms and that Inter-Region latency is greater than 1 ms. Which solutions will meet these requirements? (Choose two.)
   - [ ] A. Install the tier 1 primary system and the tier 2 secondary system in eu-central-1. Configure the tier 1 system in Availability Zone 1. Configure the tier 2 system in Availability Zone 2. Configure SAP HANA system replication between tier 1 and tier 2 by using ASYNC replication mode. Install the DR tier 3 secondary system in eu-west-1 by using SYNC replication mode.
   - [ ] B. Install the tier 1 primary system and the tier 2 secondary system in eu-central-1. Configure the tier 1 system in Availability Zone 1. Configure the tier 2 system in Availability Zone 2. Configure SAP HANA system replication between tier 1 and tier 2 by using SYNC replication mode. Install the DR tier 3 secondary system in eu-west-1 by using ASYNC replication mode.
   - [ ] C. Install the tier 1 primary system and the tier 2 secondary system in eu-central-1. Configure the tier 1 system in Availability Zone 1. Configure the tier 2 system in Availability Zone 2. Configure SAP HANA system replication between tier 1 and tier 2 by using SYNC replication mode. Install the DR tier 3 secondary system in eu-west-1. Store daily backups from tier 1 in an Amazon S3 bucket in eu-central-1. Use S3 Cross-Region Replication to copy the daily backups to eu-west-1, where they can be restored if needed.
   - [ ] D. Install the tier 1 primary system in eu-central-1. Install the tier 2 secondary system and the DR tier 3 secondary system in eu-west-1. Configure the tier 2 system in Availability Zone 1. Configure the tier 3 system in Availability Zone 2. Configure SAP HANA system replication between all tiers by using ASYNC replication mode.
   - [ ] E. Install the tier 1 primary system and the tier 2 secondary system in eu-central-1. Configure the tier 1 system in Availability Zone 1. Configure the tier 2 system in Availability Zone 2. Configure SAP HANA system replication between tier 1 and tier 2 by using SYNCMEM replication mode. Install the DR tier 3 secondary system in eu-west-1 by using ASYNC replication mode.

    <details>
      <summary>Answer</summary>

      BE.

   </details>

8. A company is running an SAP ERP Central Component (SAP ECC) system on an SAP HANA database that is 10 TB in size. The company is receiving notifications about long-running database backups every day. The company uses AWS Backint Agent for SAP HANA (AWS Backint agent) on an Amazon EC2 instance to back up the database. An SAP NetWeaver administrator needs to troubleshoot the problem and propose a solution. Which solution will help resolve this problem?
   - [ ] A. Ensure that AWS Backint agent is configured to send the backups to an Amazon S3 bucket over the internet. Ensure that the EC2 instance is configured to access the internet through a NAT gateway.
   - [ ] B. Check the UploadChannelSize parameter for AWS Backint agent. Increase this value in the aws-backint-agent-config.yaml configuration file based on the EC2 instance type and storage configurations.
   - [ ] C. Check the MaximumConcurrentFilesForRestore parameter for AWS Backint agent. Increase the parameter from 5 to 10 by using the aws-backint-agent-config.yaml configuration file.
   - [ ] D. Ensure that the backups are compressed. If necessary, configure AWS Backint agent to compress the backups and send them to an Amazon S3 bucket.

   <details>
      <summary>Answer</summary>

      B.

   </details>

9. A company wants to migrate its SAP workloads to AWS from another cloud provider. The company’s landscape consists of SAP S/4HANA, SAP BW/4HANA, SAP Solution Manager, and SAP Web Dispatcher. SAP Solution Manager is running on SAP HANA. The company wants to change the operating system from SUSE Linux Enterprise Server to Red Hat Enterprise Linux as a part of this migration. The company needs a solution that results in the least possible downtime for the SAP S/4HANA and SAP BW/4HANA systems. Which migration solution will meet these requirements?
   - [ ] A. Use SAP Software Provisioning Manager to perform a system export/import for SAP S/4HANA, SAP BW/4HANA, SAP Solution Manager, and SAP Web Dispatcher.
   - [ ] B. Use backup and restore for SAP S/4HANA, SAP BW/4HANA, and SAP Solution Manager. Reinstall SAP Web Dispatcher on AWS with the necessary configuration.
   - [ ] C. Use backup and restore for SAP S/4HANA and SAP BW/4HANA. Use SAP Software Provisioning Manager to perform a system export/import for SAP Solution Manager. Reinstall SAP Web Dispatcher on AWS with the necessary configuration.
   - [ ] D. Use SAP HANA system replication to replicate the data between the source system and the target AWS system for SAP S/4HANA and SAP BW/4HANA. Use SAP Software Provisioning Manager to perform a system export/import for SAP Solution Manager. Reinstall SAP Web Dispatcher on AWS with the necessary configuration.

   <details>
      <summary>Answer</summary>

      D.

   </details>

10. A company is running an SAP on Oracle system on IBM Power architecture in an on-premises data center. The company wants to migrate the SAP system to AWS. The Oracle database is 15 TB in size. The company has set up a 100 Gbps AWS Direct Connect connection to AWS from the on-premises data center. Which solution should the company use to migrate the SAP system MOST quickly?
    - [ ] A. Before the migration window, build a new installation of the SAP system on AWS by using SAP Software Provisioning Manager. During the migration window, export a copy of the SAP system and database by using the heterogeneous system copy process and R3load. Copy the output of the SAP system files to AWS through the Direct Connect connection. Import the SAP system to the new SAP installation on AWS. Switch over to the SAP system on AWS.
    - [ ] B. Before the migration window, build a new installation of the SAP system on AWS by using SAP Software Provisioning Manager. Back up the Oracle database by using native Oracle tools. Copy the backup of the Oracle database to AWS through the Direct Connect connection. Import the Oracle database to the SAP system on AWS. Configure Oracle Data Guard to begin replicating on-premises database log changes from the SAP system to the new AWS system. During the migration window, use Oracle to replicate any remaining changes to the Oracle database hosted on AWS. Switch over to the SAP system on AWS.
    - [ ] C. Before the migration window, build a new installation of the SAP system on AWS by using SAP Software Provisioning Manager. Create a staging Oracle database on premises to perform Cross Platform Transportable Tablespace (XTTS) conversion on the Oracle database. Take a backup of the converted staging database. Copy the converted backup to AWS through the Direct Connect connection. Import the Oracle database backup to the SAP system on AWS. Take regularly scheduled incremental backups and XTTS conversions of the staging database. Transfer these backups and conversions to the AWS target database. During the migration window, perform a final incremental Oracle backup. Convert the final Oracle backup by using XTTS. Replay the logs in the target Oracle database hosted on AWS. Switch over to the SAP system on AWS.
    - [ ] D. Before the migration window, launch an appropriately sized Amazon EC2 instance on AWS to receive the migrated SAP database. Create an AWS Server Migration Service (AWS SMS) job to take regular snapshots of the on-premises Oracle hosts. Use AWS SMS to copy the snapshot as an AMI to AWS through the Direct Connect connection. Create a new SAP on Oracle system by using the migrated AMI. During the migration window, take a final incremental SMS snapshot and copy the snapshot to AWS. Restart the SAP system by using the new up-to-date AMI. Switch over to the SAP system on AWS.
    <details>
       <summary>Answer</summary>

       C.

    </details>

11. An SAP solutions architect is designing an SAP HANA scale-out architecture for SAP Business Warehouse (SAP BW) on SAP HANA on AWS. The SAP solutions architect identifies the design as a three-node scale-out deployment of xte.32xiarge Amazon EC2 instances. The SAP solutions architect must ensure that the SAP HANA scale-out nodes can achieve the low-latency and high-throughput network performance that are necessary for node-to-node communication. Which combination of steps should the SAP solutions architect take to meet these requirements? (Choose two.)
    - [ ] A. Create a cluster placement group. Launch the instances into the cluster placement group.
    - [ ] B. Create a spread placement group. Launch the instances into the spread placement group.
    - [ ] C. Create a partition placement group. Launch the instances into the partition placement group.
    - [ ] D. Based on the operating system version, verify that enhanced networking is enabled on all the nodes.
    - [ ] E. Switch to a different instance family that provides network throughput that is greater than 25 Gbps.

    <details>
       <summary>Answer</summary>

       AD.

    </details>

12. A company needs to migrate its critical SAP workloads from an on-premises data center to AWS. The company has a few source production databases that are 10 TB or more in size. The company wants to minimize the downtime for this migration. As part of the proof of concept, the company used a low-speed, high-latency connection between its data center and AWS. During the actual migration, the company wants to maintain a consistent connection that delivers high bandwidth and low latency. The company also wants to add a layer of connectivity resiliency. The backup connectivity does not need to be as fast as the primary connectivity.An SAP solutions architect needs to determine the optimal network configuration for data transfer. The solution must transfer the data with minimum latency.Which configuration will meet these requirements?
    - [ ] A. Set up one AWS Direct Connect connection for connectivity between the on-premises data center and AWS. Add an AWS Site-to-Site VPN connection as a backup to the Direct Connect connection.
    - [ ] B. Set up an AWS Direct Connect gateway with multiple Direct Connect connections that use a link aggregation group (LAG) between the on-premises data center and AWS.
    - [ ] C. Set up Amazon Elastic File System (Amazon EFS) file system storage between the on-premises data center and AWS. Configure a cron job to copy the data into this EFS mount. Access the data in the EFS file system from the target environment.
    - [ ] D. Set up two redundant AWS Site-to-Site VPN connections for connectivity between the on-premises data center and AWS.

    <details>
       <summary>Answer</summary>

       A.

    </details>

13. A company wants to migrate its SAP ERP landscape to AWS. The company will use a highly available distributed deployment for the new architecture. Clients will access SAP systems from a local data center through an AWS Site-to-Site VPN connection that is already in place. An SAP solutions architect needs to design the network access to the SAP production environment. Which configuration approaches will meet these requirements? (Choose two.)
    - [ ] A. For the ASCS instance, configure an overlay IP address that is within the production VPC CIDR range. Create an AWS Transit Gateway. Attach the VPN to the transit gateway. Use the transit gateway to route the communications between the local data center and the production VPC. Create a static route on the production VPC to route traffic that is directed to the overlay IP address to the ASCS instance.
    - [ ] B. For the ASCS instance, configure an overlay IP address that is outside the production VPC CIDR range. Create an AWS Transit Gateway. Attach the VPN to the transit gateway. Use the transit gateway to route the communications between the local data center and the production VPC. Create a static route on the production VPC to route traffic that is directed to the overlay IP address to the ASCS instance. Most Voted
    - [ ] C. For the ASCS instance, configure an overlay IP address that is within the production VPC CIDR range. Create a target group that points to the overlay IP address. Create a Network Load Balancer, and register the target group. Create a static route on the production VPC to route traffic that is directed to the overlay IP address to the ASCS instance.
    - [ ] D. For the ASCS instance, configure an overlay IP address that is outside the production VPC CIDR range. Create a target group that points to the overlay IP address. Create a Network Load Balancer, and register the target group. Create a static route on the production VPC to route traffic that is directed to the overlay IP address to the ASCS instance. Most Voted
    - [ ] E. For the ASCS instance, configure an overlay IP address that is outside the production VPC CIDR range. Create a target group that points to the overlay IP address. Create an Application Load Balancer, and register the target group. Create a static route on the production VPC to route traffic that is directed to the overlay IP address to the ASCS instance.

    <details>
       <summary>Answer</summary>

       BD.

    </details>

14. A company is running an SAP HANA database on AWS. The company is running AWS Backint Agent for SAP HANA (AWS Backint agent) on an Amazon EC2 instance. AWS Backint agent is configured to back up to an Amazon S3 bucket. The backups are failing with an AccessDenied error in the AWS Backint agent log file. What should an SAP basis administrator do to resolve this error?
    - [ ] A. Assign execute permissions at the operating system level for the AWS Backint agent binary and for AWS Backint agent.
    - [ ] B. Assign an IAM role to an EC2 instance. Attach a policy to the IAM role to grant access to the target S3 bucket. Most Voted
    - [ ] C. Assign the correct Region ID for the S3BucketAwsRegion parameter in AWS Backint agent for the SAP HANA configuration file.
    - [ ] D. Assign the value for the EnableTagging parameter in AWS Backint agent for the SAP HANA configuration file.

    <details>
       <summary>Answer</summary>

       B.

    </details>

15. A company is starting a new project to implement an SAP landscape with multiple accounts that belong to multiple teams in the us-east-2 Region. These teams include procurement, finance, sales, and human resources. An SAP solutions architect has started designing this new landscape and the AWS account structures. The company wants to use automation as much as possible. The company also wants to secure the environment, implement federated access to accounts, centralize logging, and establish cross-account security audits. In addition, the company’s management team needs to receive a top-level summary of policies that are applied to the AWS accounts. What should the SAP solutions architect do to meet these requirements?
    - [ ] A. Use AWS CloudFormation StackSets to apply SCPs to multiple accounts in multiple Regions. Use an Amazon CloudWatch dashboard to check the applied policies in the accounts.
    - [ ] B. Use an AWS Elastic Beanstalk blue/green deployment to create IAM policies and apply them to multiple accounts together. Use an Amazon CloudWatch dashboard to check the applied policies in the accounts.
    - [ ] C. Implement guardrails by using AWS CodeDeploy and AWS CodePipeline to deploy SCPs into each account. Use the CodePipeline deployment dashboard to check the applied policies in the accounts.
    - [ ] D. Apply SCPs through AWS Control Tower. Use the AWS Control Tower integrated dashboard to check the applied policies in the accounts.
    <details>
       <summary>Answer</summary>

       D.

    </details>

16. A company is running its SAP workloads on premises and needs to migrate the workloads to AWS. All the workloads are running on SUSE Linux Enterprise Server and Oracle Database. The company’s landscape consists of SAP ERP Central Component (SAP ECC), SAP Business Warehouse (SAP BW), and SAP NetWeaver systems. The company has a dedicated AWS Direct Connect connection between its on-premises environment and AWS. The company needs to migrate the systems to AWS with the least possible downtime. Which migration solution will meet these requirements?
    - [ ] A. Use SAP Software Provisioning Manager to perform an export of the systems. Copy the export to Amazon S3. Use SAP Software Provisioning Manager to perform an import of the systems to SUSE Linux Enterprise Server and Oracle Database on AWS.
    - [ ] B. Use SAP Software Provisioning Manager to perform parallel export/import of the systems to migrate the systems to SUSE Linux Enterprise Server and Oracle Database on AWS.
    - [ ] C. Use SAP Software Provisioning Manager to perform parallel export/import of the systems to migrate the systems to Oracle Enterprise Linux and Oracle Database on AWS.
    - [ ] D. Use SAP Software Provisioning Manager to perform an export of the systems. Copy the export to Amazon S3. Use SAP Software Provisioning Manager to perform an import of the systems to Oracle Enterprise Linux and Oracle Database on AWS.

    <details>
       <summary>Answer</summary>

       C.

    </details>

17. A company is designing a disaster recovery (DR) strategy for an SAP HANA database that runs on an Amazon EC2 instance in a single Availability Zone. The company can tolerate a long RTO and an RPO greater than zero if it means that the company can save money on its DR process The company has configured an Amazon CloudWatch alarm to automatically recover the EC2 instance if the instance experiences an unexpected issue. The company has set up AWS Backint Agent for SAP HANA to save the backups into Amazon S3. What is the MOST cost-effective DR option for the company's SAP HANA database?
    - [ ] A. Set up AWS CloudFormation to automatically launch a new EC2 instance for the SAP HANA database in a second Availability Zone from backups that are stored in Amazon S3. When the SAP HANA database is operational, perform a database restore by using the standard SAP HANA restore process. Most Voted
    - [ ] B. Launch a secondary EC2 instance for the SAP HANA database on a less powerful EC2 instance type in a second Availability Zone. Configure SAP HANA system replication with the preload option turned off.
    - [ ] C. Launch a secondary EC2 instance for the SAP HANA database on an equivalent EC2 instance type in a second Availability Zone. Configure SAP HANA system replication with the preload option turned on.
    - [ ] D. Set up AWS CloudFormation to automatically launch a new EC2 instance for the SAP HANA database in a second Availability Zone from backups that are stored in Amazon Elastic Block Store (Amazon EBS). When the SAP HANA database is operational, perform a database restore by using the standard SAP HANA restore process.

    <details>
       <summary>Answer</summary>

       A.

    </details>

18. A company is using a multi-account strategy for SAP HANA and SAP BW/4HANA instances across development, QA, and production systems in the same AWS Region. Each system is hosted in its own VPC. The company needs to establish cross-VPC communication between the SAP systems. The company might add more SAP systems in the future. The company must create connectivity across the SAP systems and hundreds of AWS accounts. The solution must maximize scalability and reliability. Which solution will meet these requirements?
    - [ ] A. Create an AWS Transit Gateway in a central networking account. Attach the transit gateway to the AWS accounts. Set up routing and a network ACL to establish communication. Most Voted
    - [ ] B. Set up VPC peering between the accounts. Configure routing in each VPC to use the VPC peering links.
    - [ ] C. Create a transit VPC that uses the hub-and-spoke model. Set up routing to use the transit VPC for communication between the SAP systems.
    - [ ] D. Create a VPC link for each SAP system. Use the VPC links to connect the SAP systems.

    <details>
       <summary>Answer</summary>

       A.

    </details>

19. A company is planning to deploy a new SAP NetWeaver ABAP system on AWS with an Oracle database that runs on an Amazon EC2 instance. The EC2 instance uses a Linux-based operating system. The company needs a database storage solution that provides flexibility to adjust the IOPS regardless of the allocated storage size. Which solution will meet these requirements MOST cost-effectively?
    - [ ] A. General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volumes Most Voted
    - [ ] B. Amazon Elastic File System (Amazon EFS) Standard-Iinfrequent Access (Standard-IA) storage class
    - [ ] C. Amazon FSx for Windows File Server
    - [ ] D. Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volumes

    <details>
       <summary>Answer</summary>

       A.

    </details>

20. A company is using SAP NetWeaver with Java on AWS. The company has updated its generation of Amazon EC2 instances to the most recent generation of EC2 instances. When the company tries to start SAP, the startup fails. The log indicates that the SAP license expired or is not valid. What is the reason for this issue?
    - [ ] A. The instance ID changed as part of the EC2 generation change.
    - [ ] B. The instance’s hypervisor changed from Xen to Nitro.
    - [ ] C. The SAP Java Virtual Machine (SAP JVM) is not compatible with the new instance type.
    - [ ] D. An EC2 generation change is not supported for SAP Java-based systems.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

21. A company’s basis administrator is planning to deploy SAP on AWS in Linux. The basis administrator must set up the proper storage to store SAP HANA data and log volumes. Which storage options should the basis administrator choose to meet these requirements? (Choose two.)
    - [ ] A. Amazon Elastic Block Store (Amazon EBS) Throughput Optimized HDD (st1)
    - [ ] B. Amazon Elastic Block Store (Amazon EBS) Provisioned OPS SSD (io1, io2)
    - [ ] C. Amazon S3
    - [ ] D. Amazon Elastic File System (Amazon EFS)
    - [ ] E. Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2, gp3)

    <details>
       <summary>Answer</summary>

       BE.

    </details>

22. A company has deployed a highly available SAP NetWeaver system on SAP HANA into a VPC. The system is distributed across multiple Availability Zones within a single AWS Region. SAP NetWeaver is running on SUSE Linux Enterprise Server for SAP. SUSE Linux Enterprise High Availability Extension is configured to protect SAP ASCS and ERS instances and uses the overlay IP address concept. The SAP shared files /sapmnt and /usr/sap/trans are hosted on an Amazon Elastic File System (Amazon EFS) file system. The company needs a solution that uses already-existing private connectivity to the VPC. The SAP NetWeaver system must be accessible through the SAP GUI client tool. Which solutions will meet these requirements? (Choose two.)
    - [ ] A. Deploy an Application Load Balancer. Configure the overlay IP address as a target.
    - [ ] B. Deploy a Network Load Balancer. Configure the overlay IP address as a target. Most Voted
    - [ ] C. Use an Amazon Route 53 private zone. Create an A record that has the overlay IP address as a target.
    - [ ] D. Use AWS Transit Gateway. Configure the overlay IP address as a static route in the transit gateway route table. Specify the VPC as a target. Most Voted
    - [ ] E. Use a NAT gateway. Configure the overlay IP address as a target.
  
    <details>
       <summary>Answer</summary>

       BD.

    </details>

23. A company is planning to move all its SAP applications to Amazon EC2 instances in a VPC. Recently, the company signed a multiyear contract with a payroll software-as-a-service (SaaS) provider. Integration with the payroll SaaS solution is available only through public web APIs. Corporate security guidelines state that all outbound traffic must be validated against an allow list. The payroll SaaS provider provides only fully qualified domain name (FQDN) addresses and no IP addresses or IP address ranges. Currently, an on-premises firewall appliance filters FQDNs. The company needs to connect an SAP Process Orchestration (SAP PO) system to the payroll SaaS provider. What must the company do on AWS to meet these requirements?
    - [ ] A. Add an outbound rule to the security group of the SAP PO system to allow the FQDN of the payroll SaaS provider and deny all other outbound traffic.
    - [ ] B. Add an outbound rule to the network ACL of the subnet that contains the SAP PO system to allow the FQDN of the payroll SaaS provider and deny all other outbound traffic.
    - [ ] C. Add an AWS WAF web ACL to the VPAdd an outbound rule to allow the SAP PO system to connect to the FQDN of the payroll SaaS provider.
    - [ ] D. Add an AWS Network Firewall firewall to the VPC. Add an outbound rule to allow the SAP PO system to connect to the FQDN of the payroll SaaS provider.

    <details>
       <summary>Answer</summary>

       D.

    </details>

24. A company is planning to migrate its on-premises SAP application to AWS. The application runs on VMware vSphere. The SAP ERP Central Component (SAP ECC) server runs on an IBM Db2 database that is 2 TB in size. The company wants to migrate the database to SAP HANA. Which migration strategy will meet these requirements?
    - [ ] A. Use AWS Application Migration Service (CloudEndure Migration).
    - [ ] B. Use SAP Software Update Manager (SUM) Database Migration Option (DMO) with System Move.
    - [ ] C. Use AWS Server Migration Service (AWS SMS).
    - [ ] D. Use AWS Database Migration Service (AWS DMS).

    <details>
       <summary>Answer</summary>

       B.

    </details>

25. A company hosts multiple SAP applications on Amazon EC2 instances in a VPC. While monitoring the environment, the company notices that multiple port scans are attempting to connect to SAP portals inside the VPC. These port scans are originating from the same IP address block. The company must deny access to the VPC from all the offending IP addresses for the next 24 hours. Which solution will meet this requirement?
    - [ ] A. Modify network ACLs that are associated with all public subnets in the VPC to deny access from the IP address block.
    - [ ] B. Add a rule in the security group of the EC2 instances to deny access from the IP address block.
    - [ ] C. Create a policy in AWS Identity and Access Management (IAM) to deny access from the IP address block.
    - [ ] D. Configure the firewall in the operating system of the EC2 instances to deny access from the IP address block.
    <details>
       <summary>Answer</summary>

       A.

    </details>

26. A company has deployed SAP workloads on AWS. The AWS Data Provider for SAP is installed on the Amazon EC2 instance where the SAP application is running. An SAP solutions architect has attached an IAM role to the EC2 instance with the following policy. The AWS Data Provider for SAP is not returning any metrics to the SAP application.

    ```json
    {
       "Version": "2012-10-17",
       "Statement": [
          {
             "Sid": "AWSDataProvider1",
             "Effect": "Allow",
             "Action": [
                "EC2:DescribeInstance",
                "EC2:DescrineVolumes"
             ],
             "Resource": "*"
          },
          {
             "Sid": "AWSDataProvider2",
             "Effect": "Allow",
             "Action": "S3:GetObject",
             "Resource": [
                "arn:aws:s3::aws-sap-data-provider/config.properties"
             ]
          }
       ]
    }
    ```

    - [ ] A. Add the cloudwatch:ListMetrics action to the policy statement with Sid AWSDataProvider1.
    - [ ] B. Add the cloudwatch:GetMetricStatistics action to the policy statement with Sid AWSDataProvider1.
    - [ ] C. Add the cloudwatch:GetMetricStream action to the policy statement with Sid AWSDataProvider1.
    - [ ] D. Add the cloudwatch:DescribeAlarmsForMetric action to the policy statement with Sid AWSDataProvider1.search and discover metadata.

    <details>
       <summary>Answer</summary>

       B.

    </details>

27. A company wants to deploy an SAP HANA database on AWS by using AWS Launch Wizard for SAP. An SAP solutions architect needs to run a custom post-deployment script on the Amazon EC2 instance that Launch Wizard provisions. Which actions can the SAP solutions architect take to provide the post-deployment script in the Launch Wizard console? (Choose two.)
    - [ ] A. Provide the FTP URL of the script.
    - [ ] B. Provide the HTTPS URL of the script on a web server.
    - [ ] C. Provide the Amazon S3 URL of the script.
    - [ ] D. Write the script inline.
    - [ ] E. Upload the script.
    <details>
       <summary>Answer</summary>

       CE.

    </details>

28. A company is planning to move its on-premises SAP HANA database to AWS. The company needs to migrate this environment to AWS as quickly as possible. An SAP solutions architect will use AWS Launch Wizard for SAP to deploy this SAP HANA workload. Which combination of steps should the SAP solutions architect follow to start the deployment of this workload on AWS? (Choose three.)
    - [ ] A. Download the SAP HANA software.
    - [ ] B. Download the AWS CloudFormation template for the SAP HANA deployment.
    - [ ] C. Download and extract the SAP HANA software. Upload the SAP HANA software to an FTP server that Launch Wizard can access.
    - [ ] D. Upload the unextracted SAP HANA software to an Amazon S3 destination bucket. Follow the S3 file path syntax for the software in accordance with Launch Wizard recommendations.
    - [ ] E. Bring the operating system AMI by using the Bring Your Own Image (BYOI) model, or purchase the subscription for the operating system AMI from AWS Marketplace.
    - [ ] F. Create the SAP file system by using Amazon Elastic Block Store (Amazon EBS) before the deployment.

    <details>
       <summary>Answer</summary>

       ADE.

    </details>

29. A company wants to implement SAP HANA on AWS with the Multi-AZ deployment option by using AWS Launch Wizard for SAP. The solution will use SUSE Linux Enterprise High Availability Extension for the high availability deployment. An SAP solutions architect must ensure that all the prerequisites are met. The SAP solutions architect also must ensure that the user inputs to start the guided deployment of Launch Wizard are valid. Which combination of steps should the SAP solutions architect take to meet these requirements? (Choose two.)
    - [ ] A. Before starting the Launch Wizard deployment, create the underlying Amazon Elastic Block Store (Amazon EBS) volume types to use for SAP HANA data and log volumes based on the performance requirements.
    - [ ] B. Use a value for the PaceMakerTag parameter that is not used by any other Amazon EC2 instances in the AWS Region where the system is being deployed.
    - [ ] C. Ensure that the virtual hostname for the SAP HANA database that is used for the SUSE Linux Enterprise High Availability Extension configuration is not used in any other deployed accounts.
    - [ ] D. Ensure that the VirtuallPAddress parameter is outside the VPC CIDR and is not being used in the route table that is associated with the subnets where primary and secondary SAP HANA instances will be deployed.
    - [ ] E. Before starting the Launch Wizard deployment, set up the SUSE Linux Enterprise High Availability Extension network configuration and security group.置的随机切割森林（RCF）模型来检测数据中的异常情况。 Ingest the data and store it in Amazon S3. Have an AWS Glue job that is triggered on demand transform the new data. Then use the built-in Random Cut Forest (RCF) model within Amazon SageMaker to detect anomalies in the data.

    <details>
       <summary>Answer</summary>

       BD.

    </details>

30. A company that has SAP workloads on premises plans to migrate an SAP environment to AWS. The company is new to AWS and has no prior setup. The company has the following requirements: The application server and database server must be placed in isolated network configurations. (1) SAP systems must be accessible to the on-premises end users over the internet. (2) The cost of communications between the application server and the database server must be minimized. (3) Which combination of steps should an SAP solutions architect take to meet these requirements? (Choose two.)
    - [ ] A. Configure a Network Load Balancer for incoming connections from end users.
    - [ ] B. Set up an AWS Site-to-Site VPN connection between the company’s on-premises network and AWS.
    - [ ] C. Separate the application server and the database server by using different VPCs.
    - [ ] D. Separate the application server and the database server by using different subnets and network security groups within the same VPC.
    - [ ] E. Set up an AWS Direct Connect connection with a private VIF between the company’s on-premises network and AWS.

    <details>
       <summary>Answer</summary>

       BD.

    </details>

31. A company is running its SAP workload on AWS. The company’s security team has implemented the following requirements: (1) All Amazon EC2 instances for SAP must be SAP certified instance types. (2) Encryption must be enabled for all Amazon S3 buckets and Amazon Elastic Block Store (Amazon EBS) volumes. (3) AWS CloudTrail must be activated. (4) SAP system parameters must be compliant with business rules. (5) Detailed monitoring must be enabled for all instances. The company wants to develop an automated process to review the systems for compliance with the security team’s requirements. The process also must provide notification about any deviation from these standards. Which solution will meet these requirements?
    - [ ] A. Use AWS AppConfig to model configuration data in an AWS Systems Manager Automation runbook. Schedule this Systems Manager Automation runbook to monitor for compliance with all the requirements. Integrate AWS AppConfig with Amazon CloudWatch for notification purposes.
    - [ ] B. Use AWS Config managed rules to monitor for compliance with all the requirements. Use Amazon EventBridge (Amazon CloudWatch Events) and Amazon Simple Notification Service (Amazon SNS) for email notification when a resource is flagged as noncompliant.
    - [ ] C. Use AWS Trusted Advisor to monitor for compliance with all the requirements. Use Trusted Advisor preferences for email notification when a resource is flagged as noncompliant.
    - [ ] D. Use AWS Config managed rules to monitor for compliance with the requirements, except for the SAP system parameters. Create AWS Config custom rules to validate the SAP system parameters. Use Amazon EventBridge (Amazon CloudWatch Events) and Amazon Simple Notification Service (Amazon SNS) for email notification when a resource is flagged as noncompliant.
  
    <details>
       <summary>Answer</summary>

       D.

    </details>

32. A company is hosting its SAP workloads on AWS. An SAP solutions architect is designing high availability architecture for the company’s production SAP S/4HANA and SAP BW/4HANA workloads. These workloads have the following requirements: (1) Redundant SAP application servers that consist of a primary application server (PAS) and an additional application server (AAS) (2) ASCS and ERS instances that use a failover cluster (3) Database high availability with a primary DB instance and a secondary DB instance. How should the SAP solutions architect design the architecture to meet these requirements?
    - [ ] A. Deploy ASCS and ERS cluster nodes in different subnets within the same Availability Zone. Deploy the PAS instance and AAS instance in different subnets within the same Availability Zone. Deploy the primary DB instance and secondary DB instance in different subnets within the same Availability Zone. Deploy all the components in the same VPC.
    - [ ] B. Deploy ASCS and ERS cluster nodes in different subnets within the same Availability Zone. Deploy the PAS instance and AAS instance in different subnets within the same Availability Zone. Deploy the primary DB instance and secondary DB instance in different subnets within the same Availability Zone. Deploy the ASCS instance, PAS instance, and primary DB instance in one VPC. Deploy the ERS instance, AAS instance, and secondary DB instance in a different VPC.
    - [ ] C. Deploy ASCS and ERS cluster nodes in different subnets across two Availability Zones. Deploy the PAS instance and AAS instance in different subnets across two Availability Zones. Deploy the primary DB instance and secondary DB instance in different subnets across two Availability Zones. Deploy all the components in the same VPC.
    - [ ] D. Deploy ASCS and ERS cluster nodes in different subnets across two Availability Zones. Deploy the PAS instance and AAS instance in different subnets across two Availability Zones. Deploy the primary DB instance and secondary DB instance in different subnets across two Availability Zones. Deploy the ASCS instance, PAS instance, and primary DB instance in one VPC. Deploy the ERS instance, AAS instance, and secondary DB instance in a different VPC.
    <details>
       <summary>Answer</summary>

       C.

    </details>

33. 一位数据科学家需要将一个现有的企业内部ETL流程迁移到云端。目前的流程以固定的时间间隔运行，并使用PySpark将多个大型数据源合并和格式化为一个单一的综合输出，供下游处理。数据科学家对云解决方案有以下要求： -合并多个数据源。-重用现有的PySpark逻辑。-在现有的时间表上运行该解决方案。-最大限度地减少需要管理的服务器的数量。该数据科学家应该使用哪种架构来建立这个解决方案？ A Data Scientist needs to migrate an existing on-premises ETL process to the cloud. The current process runs at regular time intervals and uses PySpark to combine and format multiple large data sources into a single consolidated output for downstream processing. The Data Scientist has been given the following requirements to the cloud solution: -Combine multiple data sources. -Reuse existing PySpark logic. -Run the solution on the existing schedule. -Minimize the number of servers that will need to be managed. Which architecture should the Data Scientist use to build this solution?
    - [ ] A. 把原始数据写到Amazon S3。安排一个AWS Lambda函数，根据现有的时间表向一个持久的亚马逊EMR集群提交Spark步骤。使用现有的PySpark逻辑，在EMR集群上运行ETL工作。将结果输出到Amazon S3中的 "处理过的 "位置，供下游使用。 Write the raw data to Amazon S3. Schedule an AWS Lambda function to submit a Spark step to a persistent Amazon EMR cluster based on the existing schedule. Use the existing PySpark logic to run the ETL job on the EMR cluster. Output the results to a `processed` location in Amazon S3 that is accessible for downstream use.
    - [ ] B. 把原始数据写到Amazon S3。创建一个AWS Glue EL作业，对输入数据进行ETL处理。在PySpark中编写ETL工作，以利用现有的逻辑。创建一个新的AWS Glue触发器，根据现有的时间表触发ETL工作。配置ETL工作的输出目标，将其写入Amazon S3中的 "处理 "位置，供下游使用。 Write the raw data to Amazon S3. Create an AWS Glue EL job to perform the ETL processing against the input data. Write the ETL job in PySpark to leverage the existing logic. Create a new AWS Glue trigger to trigger the ETL job based on the existing schedule. Configure the output target of the ETL job to write to a `processed` location in Amazon S3 that is accessible for downstream use.
    - [ ] C. 把原始数据写到Amazon S3。安排一个AWS Lambda函数在现有的时间表上运行，并处理来自Amazon S3的输入数据。用Python编写Lambda逻辑，并实现现有的PySpark逻辑，以执行ETL过程 让Lambda函数将结果输出到Amazon S3中的`processed`位置，供下游使用。 Write the raw data to Amazon S3. Schedule an AWS Lambda function to run on the existing schedule and process the input data from Amazon S3. Write the Lambda logic in Python and implement the existing PySpark logic to perform the ETL process Have the Lambda function output the results to a `processed` location in Amazon S3 that is accessible for downstream use.
    - [ ] D. 使用Amazon Kinesis Data Analytics来流化输入数据，并对流进行实时SQL查询，以在流中进行所需的转换。将输出结果交付给Amazon S3中的`处理`位置，供下游使用。 Use Amazon Kinesis Data Analytics to stream the input data and perform real-time SQL queries against the stream to carry out the required transformations within the stream. Deliver the output results to a `processed` location in Amazon S3 that is accessible for downstream use.
  
    <details>
       <summary>Answer</summary>

       答案B：无服务的。

    </details>

34. 一个机器学习团队在Amazon S3中拥有几个大型CSV数据集。历史上，用Amazon SageMaker Linear Learner算法建立的模型在类似大小的数据集上训练需要花费数小时。该团队的领导需要加快训练过程。机器学习专家可以做些什么来解决这个问题？ A Machine Learning team has several large CSV datasets in Amazon S3. Historically, models built with the Amazon SageMaker Linear Learner algorithm have taken hours to train on similar-sized datasets. The team’s leaders need to accelerate the training process. What can a Machine Learning Specialist do to address this concern?
    - [ ] A. 使用Amazon SageMaker Pipe模式。 Use Amazon SageMaker Pipe mode.
    - [ ] B. 使用亚马逊机器学习来训练模型。 Use Amazon Machine Learning to train the models.
    - [ ] C. 使用Amazon Kinesis将数据流到Amazon SageMaker。 Use Amazon Kinesis to stream the data to Amazon SageMaker.
    - [ ] D. 使用AWS Glue将CSV数据集转换为JSON格式。 Use AWS Glue to transform the CSV dataset to the JSON format.

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

35. 从由以下两个句子组成的文本语料库中，建立了一个使用单字和大字的术语频率-逆文档频率（tf-idf）矩阵。1 `Please call the number below` 2 `Please do not call us` tf-idf矩阵的尺寸是多少？ A term frequency-inverse document frequency (tf-idf) matrix using both unigrams and bigrams is built from a text corpus consisting of the following two sentences: 1 Please call the number below. 2 Please do not call us. What are the dimensions of the tf-idf matrix?
    - [ ] A. (2, 16)
    - [ ] B. (2, 8)
    - [ ] C. (2, 10)
    - [ ] D. (8, 10)

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

36. 一家大型移动网络运营公司正在建立一个机器学习模型，以预测那些有可能退订服务的客户。该公司计划为这些客户提供奖励，因为客户流失的成本远远大于奖励的成本。在对100个客户的测试数据集进行评估后，该模型产生了以下混淆矩阵。根据模型的评估结果，为什么说这是一个可行的生产模型？ A large mobile network operating company is building a machine learning model to predict customers who are likely to unsubscribe from the service. The company plans to offer an incentive for these customers as the cost of churn is far greater than the cost of the incentive. The model produces the following confusion matrix after evaluating on a test dataset of 100 customers. Based on the model evaluation results, why is this a viable model for production?

    |n=100|PREDICTED: Yes|PREDICTED: No|
    |----|-------------|--------------|
    |Actual: Yes|10|4|
    |Actual: No|10|76|

    - [ ] A. 该模型的精确度为86%，公司因假阴性而产生的成本小于假阳性。 The model is 86 accurate and the cost incurred by the company as a result of false negatives is less than the false positives.
    - [ ] B. 该模型的精确度为86%o，小于该模型的精确度。 The precision of the model is 86%o, which is less than the accuracy of the model.
    - [ ] C. 该模型的准确度为86%，公司因假阳性而产生的成本小于假阴性。 The model is 86% accurate and the cost incurred by the company as a result of false positives is less than the false negatives.
    - [ ] D. 该模型的精确度为86%，大于模型的精确度。 The precision of the model is 86%, which is greater than the accuracy of the model.

    <details>
       <summary>Answer</summary>

       答案C
       TP=10, TN=76, FP=10, FN=4
       准确度=（TP+TN）/（TP+TN+FP+FN）=（10+76）/（10+76+10+4）=86
      - 所以现在可以是A或C
      - 现在公司可以支付奖励，但不能失去一个客户。
      - 这意味着如果你错误地预测一个客户将离开并给他奖励，公司是可以接受的。
      - 但是反过来说，如果你错误地预测一个客户不会离开（即使他会离开），这将给公司带来很大的损失，所以你不应该把客户退订的阳性案例预测为没有退订，这意味着你不应该错误地预测阳性退订并把它标记为阴性。
      - 假阳性比假阴性对公司的损失要小。

    </details>

37. 一位机器学习专家正在为一家公司设计一个改善销售的系统。目标是利用该公司拥有的大量关于用户行为和产品偏好的信息，根据用户与其他用户的相似性来预测用户会喜欢哪些产品。专家应该怎样做才能达到这个目标？ A Machine Learning Specialist is designing a system for improving sales for a company. The objective is to use the large amount of information the company has on users' behavior and product preferences to predict which products users would like based on the users' similarity to other users. What should the Specialist do to meet this objective?
    - [ ] A. 在Amazon EMR上用Apache Spark ML构建一个基于内容的过滤推荐引擎。 Build a content-based filtering recommendation engine with Apache Spark ML on Amazon EMR
    - [ ] B. 在Amazon EMR上用Apache Spark ML建立一个协作过滤推荐引擎。 Build a collaborative filtering recommendation engine with Apache Spark ML on Amazon EMR
    - [ ] C. 在Amazon EMR上用Apache Spark AIL建立一个基于模型的过滤推荐引擎。 Build a model-based filtering recommendation engine with Apache Spark AIL on Amazon EMR
    - [ ] D. 在Amazon EMR上用Apache Spark ML建立一个组合式过滤推荐引擎。 Build a combinative filtering recommendation engine with Apache Spark ML on Amazon EMR

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

38. 一家移动网络运营商正在建立一个分析平台，使用Amazon Athena和Amazon S3来分析和优化公司的运营。源系统实时发送CSV格式的数据。数据工程团队希望在将数据存储到Amazon S3之前将其转换为Apache Parquet格式，哪种解决方案的实施工作量最小？ A Mobile Network Operator is building an analytics platform to analyze and optimize a company‘’s operations using Amazon Athena and Amazon S3. The source systems send data in CSV format in real time. The Data Engineering team wants to transform the data to the Apache Parquet format before storing it on Amazon S3 Which solution takes the LEAST effort to implement?
    - [ ] A. 使用Apache Kafka Streams在Amazon EC2实例上摄取CSV数据，并使用Kafka Connect S3将数据序列化为Parquet。 Ingest CSV data using Apache Kafka Streams on Amazon EC2 instances and use Kafka Connect S3 to serialize data as Parquet.
    - [ ] B. 从Amazon Kinesis数据流摄取CSV数据，并使用Amazon Glue将数据转换为Parquet。 Ingest CSV data from Amazon Kinesis Data Streams and use Amazon Glue to convert data into Parquet.
    - [ ] C. 在Amazon MR集群中使用Apache Spark结构化流摄取CSV数据，并使用Apache Spark将数据转换为Parquet。 Ingest CSV data using Apache Spark Structured Streaming in an Amazon MR cluster and use Apache Spark to convert data into Parquet.
    - [ ] D. 从Amazon Kinesis数据流摄取CSV数据，并使用Amazon Kinesis Data Firehose将数据转换为Parquet。 Ingest CSV data from Amazon Kinesis Data Streams and use Amazon Kinesis Data Firehose to convert data into Parquet.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

39. 一个城市希望监测其空气质量，以解决空气污染的后果。一位机器学习专家需要预测该城市未来2天的空气质量，单位为百万分之一的污染物。由于这是一个原型，只有过去一年的每日数据可用，哪个模型最有可能在Amazon SageMaker中提供最佳结果？ A city wants to monitor its air quality to address the consequences of air pollution. A Machine Learning Specialist needs to forecast the air quality in parts per million of contaminates for the next 2 days in the city. As this is a prototype, only daily data from the last year is available Which model is MOST likely to provide the best results in Amazon SageMaker?
    - [ ] A. 在由全年数据组成的单一时间序列上使用Amazon SageMaker的K-Nearest-Neighbors（KNN）算法，并使用预测器类型的回归器。 Use the Amazon SageMaker K-Nearest-Neighbors (KNN) algorithm on the single time series consisting of the full year of data with a predictor type of regressor.
    - [ ] B. 在由全年数据组成的单一时间序列上使用Amazon SageMaker随机切割森林（RCF）。 Use Amazon SageMaker Random Cut Forest (RCF) on the single time series consisting of the full year of data.
    - [ ] C. 在由全年数据组成的单一时间序列上使用Amazon SageMaker Linear Learner算法，其预测器类型为regressor。Use the Amazon SageMaker Linear Learner algorithm on the single fire series consisting of the full year of data with a predictor type of regressor.
    - [ ] D. 在由全年数据组成的单一时间序列上使用Amazon SageMaker Linear Learner算法，预测器类型为分类器。 Use the Amazon SageMaker Linear Learner algorithm on the single time series consisting of the full year of data with a predictor type of classifier.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

40. 一位数据工程师需要使用包含客户信用卡信息的数据集建立一个模型。数据工程师如何确保数据的加密和信用卡信息的安全？ A Data Engineer needs to build a model using a dataset containing customer credit card information. How can the Data Engineer ensure the data remains encrypted and the credit card information is secure?
    - [ ] A. 使用自定义的加密算法对数据进行加密，并将数据存储在VPC中的Amazon SageMaker实例上。使用SageMaker DeepAR算法来随机化信用卡号码。 Use a custom encryption algorithm to encrypt the data and store the data on an Amazon SageMaker instance in a VPC. Use the SageMaker DeepAR algorithm to randomize the credit card numbers.
    - [ ] B. 使用IAM策略来加密Amazon S3桶上的数据，Amazon Kinesis自动丢弃信用卡号码，并插入假的信用卡号码。 Use an IAM policy to encrypt the data on the Amazon S3 bucket and Amazon Kinesis to automatically discard credit card numbers and insert fake credit card numbers.
    - [ ] C. 使用Amazon SageMaker启动配置，一旦数据被复制到VPC中的SageMaker实例，就对其进行加密。使用SageMaker主成分分析（PCA）算法来减少信用卡号码的长度。 Use an Amazon SageMaker launch configuration to encrypt the data once it is copied to the SageMaker instance in a VPC. Use the SageMaker principal component analysis (PCA) algorithm to reduce the length of the credit card numbers.
    - [ ] D. 使用AWS KMS对Amazon S3和Amazon SageMaker上的数据进行加密，并使用AWS Glue对客户数据中的信用卡号码进行编辑。 Use AWS KMS to encrypt the data on Amazon S3 and Amazon SageMaker and redact the credit card numbers from the customer data with AWS Glue.

    <details>
       <summary>Answer</summary>

       答案D：当在S3上加密的数据和SageMaker使用相同的AWS KMS密钥时，它可以在那里使用加密的数据。

    </details>

41. 一位机器学习专家在企业VPC的一个私有子网中使用Amazon SageMaker笔记本实例。ML专家的重要数据存储在Amazon SageMaker笔记本实例的Amazon EBS卷上，需要对该EBS卷进行快照。然而，ML专家在VPC中找不到Amazon SageMaker笔记本实例的EBS卷或Amazon EC2实例。为什么ML专家在VPC中看不到该实例？ A Machine Learning Specialist is using an Amazon SageMaker notebook instance in a private subnet of a corporate VPC. The ML Specialist has important data stored on the Amazon SageMaker notebook instance’s Amazon EBS volume and needs to take a snapshot of that EBS volume. However, the ML Specialist cannot find the Amazon SageMaker notebook instance’s EBS volume or Amazon EC2 instance within the VPC. Why Is the ML Specialist not seeing the instance visible in the VPC?
    - [ ] A. Amazon SageMaker 笔记本实例是基于客户账户内的 EC2 实例，但它们在 VPC 之外运行。 Amazon SageMaker notebook instances are based on the EC2 instances within the customer account, but they run outside of VPCs.
    - [ ] B. Amazon SageMaker 笔记本实例是基于客户账户内的 Amazon ECS 服务。 Amazon SageMaker notebook instances are based on the Amazon ECS service within customer accounts.
    - [ ] C. Amazon SageMaker笔记本实例是基于AWS服务账户内运行的EC2实例。 Amazon SageMaker notebook instances are based on EC2 instances running within AWS service accounts.
    - [ ] D. Amazon SageMaker笔记本实例是基于在AWS服务账户内运行的AWS ECS实例。 Amazon SageMaker notebook instances are based on AWS ECS instances running within AWS service accounts.

    <details>
       <summary>Answer</summary>

       答案C：[ref](https://docs.aws.amazon.com/zh_cn/sagemaker/latest/dg/gs-setup-working-env.html)。

    </details>

42. 一位机器学习专家正在建立一个模型，将使用Amazon SageMaker执行时间序列预测。专家已经完成了模型的训练，现在计划在端点上进行负载测试，以便他们能够为模型变体配置自动扩展。哪种方法可以让专家在负载测试期间审查延迟、内存利用率和CPU利用率？ A Machine Learning Specialist is building a model that will perform time series forecasting using Amazon SageMaker. The Specialist has finished training the model and is now planning to perform load testing on the endpoint so they can configure Auto Scaling for the model variant. Which approach will allow the Specialist to review the latency, memory utilization, and CPU utilization during the load test?
    - [ ] A. 通过利用Amazon Athena和Amazon QuickSight来查看已经写入Amazon S3的SageMaker日志，以便在产生日志的时候进行可视化。 Review SageMaker logs that have been written to Amazon S3 by leveraging Amazon Athena and Amazon QuickSight to visualize logs as they are being produced.
    - [ ] B. 生成一个Amazon CloudWatch仪表盘，为Amazon SageMaker输出的延迟、内存利用率和CPU利用率指标创建一个单一的视图。 Generate an Amazon CloudWatch dashboard to create a single view for the latency, memory utilization, and CPU utilization metrics that are outputted by Amazon SageMaker.
    - [ ] C. 建立自定义的Amazon CloudWatch日志，然后利用Amazon ES和Kibana来查询和可视化由Amazon SageMaker生成的日志数据。 Build custom Amazon CloudWatch Logs and then leverage Amazon ES and Kibana to query and visualize the log data as it is generated by Amazon SageMaker.
    - [ ] D. 将Amazon SageMaker生成的Amazon Cloud Watch Logs发送到Amazon ES，并使用Kibana查询和可视化日志数据。 Send Amazon CloudWatch Logs that were generated by Amazon SageMaker to Amazon ES and use Kibana to query and visualize the log data.

    <details>
       <summary>Answer</summary>

       答案B：[ref](https://docs.aws.amazon.com/zh_cn/sagemaker/latest/dg/monitoring-cloudwatch.html)。

    </details>

43. 一家制造公司有结构化和非结构化的数据存储在Amazon S3桶中。一位机器学习专家希望使用SQL对这些数据进行查询，哪种解决方案需要最少的努力才能查询这些数据？ A manufacturing company has structured and unstructured data stored in an Amazon S3 bucket. A Machine Learning Specialist wants to use SQL to run queries on this data Which solution requires the LEAST effort to be able to query this data?
    - [ ] A. 使用AWS Data Pipeline来转换数据，并使用Amazon RDS来运行查询。 Use AWS Data Pipeline to transform the data and Amazon RDS to run queries.
    - [ ] B. 使用AWS Glue对数据进行编目，并使用Amazon Athena来运行查询。 Use AWS Glue to catalogue the data and Amazon Athena to run queries.
    - [ ] C. 使用AWS Batch在数据上运行ETL和Amazon Aurora运行查询。 Use AWS Batch to run ETL on the data and Amazon Aurora to run the queries.
    - [ ] D. 使用AWS Lambda来转换数据，使用Amazon Kinesis Data Analytics来运行查询。 Use AWS Lambda to transform the data and Amazon Kinesis Data Analytics to run queries.

    <details>
       <summary>Answer</summary>

       答案B：使用AWS Glue对数据进行编目，Amazon Athena对S3上的数据运行查询，是这些服务非常典型的用例。

    </details>

44. 一位机器学习专家正在为一个应用程序开发一个定制的视频推荐模型。用于训练这个模型的数据集非常大，有数百万个数据点，托管在一个Amazon S3桶中。专家希望避免将所有这些数据加载到Amazon SageMaker笔记本实例上，因为移动这些数据需要几个小时，而且会超过笔记本实例上附加的5GB Amazon EBS卷。哪种方法允许专家使用所有的数据来训练模型？ A Machine Learning Specialist is developing a custom video recommendation model for an application. The dataset used to train this model is very large with millions of data points and is hosted in an Amazon S3 bucket. The Specialist wants to avoid loading all of this data onto an Amazon SageMaker notebook instance because it would take hours to move and will exceed the attached 5 GB Amazon EBS volume on the notebook instance. Which approach allows the Specialist to use all the data to train the model?
    - [ ] A. 将一个较小的数据子集加载到SageMaker笔记本中，并在本地进行训练。确认训练代码正在执行，并且模式参数看起来很合理。使用S3桶中的完整数据集，使用管道输入模式启动SageMaker训练作业。 Load a smaller subset of the data into the SageMaker notebook and train locally. Confirm that the training code is executing, and the mode parameters seem reasonable. Initiate a SageMaker training job using the full dataset from the S3 bucket using Pipe input mode.
    - [ ] B. 用AWS深度学习AMI启动一个亚马逊EC2实例，并将S3桶连接到该实例。在少量的数据上进行训练，以验证训练代码和超参数。回到亚马逊Speaker，使用完整的数据集进行训练。 Launch an Amazon EC2 instance with an AWS Deep Learning AMI and attach the S3 bucket to the instance. Train on a small amount of the data to verify the training code and hyperparameters. Go back to Amazon Speaker and train using the full dataset.
    - [ ] C. 使用AWS Glue来训练一个模型，使用一小部分数据来确认数据与Amazon SageMaker兼容。使用S3桶中的完整数据集，使用管道输入模式启动SageMaker训练作业。 Use AWS Glue to train a model using a small subset of the data to confirm that the data will be compatible with Amazon SageMaker. Initiate a SageMaker training job using the full dataset from the S3 bucket using Pipe input mode.
    - [ ] D. 将一个较小的数据子集加载到SageMaker笔记本中，并在本地进行训练。确认训练代码正在执行，并且模型参数看起来很合理。启动一个带有AWS深度学习AMI的亚马逊EC2实例，并附加S3桶来训练完整的数据集。 Load a smaller subset of the data into the SageMaker notebook and train locally. Confirm that the training code is executing, and the model parameters seem reasonable. Launch an Amazon EC2 instance with an AWS Deep Learning AMI and attach the S3 bucket to train the full dataset.

    <details>
       <summary>Answer</summary>

       答案A：使用pipe模式，答案在AC，Glue不能用作训练。

    </details>

45. 一家公司正在建立一个系统来管理它存储在Amazon S3中的所有数据集。该公司希望能自动运行数据的转换工作，并维护有关数据集的元数据目录。该解决方案应该需要最少的设置和维护。哪种解决方案可以让该公司实现其目标？ A company is setting up a system to manage all of the datasets it stores in Amazon S3. The company would like to automate running transformation jobs on the data and maintaining a catalog of the metadata concerning the datasets. The solution should require the least amount of setup and maintenance. Which solution will allow the company to achieve Its goals?
    - [ ] A.  创建一个安装了Apache Hive的Amazon EMR集群。然后，创建一个Hive元存储和一个脚本，按计划运行转换工作。 Create an Amazon EMR cluster with Apache Hive installed. Then, create a Hive metastore and a script to run transformation jobs on a schedule.
    - [ ] B. 创建一个AWS Glue爬虫来填充AWS Glue数据目录。然后，编写一个AWS Glue ETL作业，并为数据转换作业设置一个时间表。 Create an AWS Glue crawler to populate the AWS Glue Data Catalog. Then, author an AWS Glue ETL job, and set up a schedule for data transformation jobs.
    - [ ] C. 创建一个安装有Apache Spark的Amazon EMR集群。然后，命一个Apache Hive元存储和一个脚本，在时间表上运行转换工作。 Create an Amazon EMR cluster with Apache Spark installed. Then, fate an Apache Hive metastore and a script to run transformation jobs on a schedule.
    - [ ] D. 创建一个AWS数据管道，对数据进行转换。然后，创建一个Apache Hive元存储和一个脚本，在时间表上运行转换工作。 Create an AWS Data Pipeline that transforms the data. Then, create an Apache Hive metastore and a script to run transformation jobs on a schedule.

    <details>
       <summary>Answer</summary>

       答案B：AWS Glue是正确的答案，因为这个选项需要最少的设置和维护，因为它是无服务器的，而且它不需要管理基础设施。A、C和D都是可以解决问题的方案，但需要更多的配置步骤，并且需要更高的运行和维护开销。

    </details>

46. 一位数据科学家在训练过程中通过改变多个参数来优化一个模型。该数据科学家观察到，在参数相同的多次运行中，损失函数收敛到不同的、但稳定的值。数据科学家应该怎么做来改善训练过程？ A Data Scientist is working on optimizing a model during the training process by varying multiple parameters. The Data Scientist observes that during multiple runs with identical parameters, the loss function converges to different, yet stable, values. What should the Data Scientist do to improve the training process?
    - [ ] A. 增加学习率。保持批次大小不变。 Increase the learning rate. Keep the batch size the same.
    - [ ] B. 减少批次大小。降低学习率。Reduce the batch size. Decrease the learning rate.
    - [ ] C. 保持批次大小不变。降低学习率。 Keep the batch size the same. Decrease the learning rate.
    - [ ] D. 不要改变学习率。增加批量大小。 Do not change the learning rate. Increase the batch size.

    <details>
       <summary>Answer</summary>

       答案B：最有可能的是，损失函数是非常弯曲的，并且有多个局部最小值，在那里训练会被卡住。减少批量大小将帮助数据科学家随机地走出局部最小值的障碍。降低学习率可以防止过度地处理全局损失函数的最小值。

    </details>

47. 一位机器学习专家正在配置Amazon SageMaker，以便多个数据科学家能够访问笔记本、训练模型和部署端点。为了确保最佳的操作性能，专家需要能够跟踪科学家部署模型的频率，部署的SageMaker端点的GPU和CPU利用率，以及调用端点时产生的所有错误。哪些服务与Amazon SageMaker集成，以跟踪这些信息？(选择两个) A Machine Learning Specialist is configuring Amazon SageMaker so multiple Data Scientists can access notebooks, train models, and deploy endpoints. To ensure the best operational performance, the Specialist needs to be able to track how often the Scientists are deploying models, GPU and CPU utilization on the deployed SageMaker endpoints, and all errors that are generated when an endpoint is invoked. Which services are integrated with Amazon SageMaker to track this information? (Choose two)
    - [ ] A. AWS CloudTrail
    - [ ] B. AWS Health
    - [ ] C. AWS Trusted Advisor
    - [ ] D. Amazon CloudWatch
    - [ ] E. AWS Config

    <details>
       <summary>Answer</summary>

       答案AD：CloudTrail用于跟踪科学家部署模型的频率。CloudWatch用于监控GPU和CPU。

    </details>

48. 一家零售连锁店一直在使用Amazon Kinesis Data Firehose将采购记录从其20,000家商店的网络中摄入到Amazon S3。为了支持训练一个改进的机器学习模型，训练记录将需要新的但简单的转换，一些属性将被合并。该模型需要每天重新训练。考虑到大量的存储和传统的数据摄取，哪个变化需要最少的开发工作？ A retail chain has been ingesting purchasing records from its network of 20,000 stores to Amazon S3 using Amazon Kinesis Data Firehose. To support training an improved machine learning model, training records will require new but simple transformations, and some attributes will be combined. The model needs to be retrained daily. Given the large number of stores and the legacy data ingestion, which change will require the LEAST amount of development effort?
    - [ ] A. 要求商店切换到在AWS存储网关上捕获他们的本地数据，以加载到Amazon S3，然后使用AWS Glue来进行转换。 Require that the stores to switch to capturing their data locally on AWS Storage Gateway for loading into Amazon S3, then use AWS Glue to de the transformation.
    - [ ] B. 部署一个运行Apache Spark和转换逻辑的Amazon EMR集群，并让该集群每天在Amazon S3的累积记录上运行，将新的/转换的记录输出到Amazon S3。 Deploy an Amazon EMR cluster running Apache Spark with the transformation logic, and have the cluster run each day on the accumulating records in Amazon S3, outputting new/transformed records to Amazon S3.
    - [ ] C. 建立一个具有转换逻辑的亚马逊EC2实例群，让它们转换亚马逊S3上积累的数据记录，并将转换后的记录输出到亚马逊S3。 Spin up a fleet of Amazon EC2 instances with the transformation logic, have them transform the data records accumulating on Amazon S3, and output the transformed records to Amazon S3.
    - [ ] D. 在Kinesis Data Firehose流的下游插入一个Amazon Kinesis Data Analytics流，使用SQL将原始记录属性转化为简单的转化值。 Insert an Amazon Kinesis Data Analytics stream downstream of the Kinesis Data Firehose stream that transforms raw record attributes into simple transformed values using SQL.

    <details>
       <summary>Answer</summary>

       答案D：问题有"简单的转换，一些属性将被合并"和最小的开发努力。Kinesis分析可以从Firehose获取数据，转换并写入S3。

    </details>

49. 一位机器学习专家正在构建一个卷积神经网络（CNN），它将对10种类型的动物进行分类。该专家在一个神经网络中建立了一系列的层，它将接收一个动物的输入图像，通过一系列的卷积层和池化层，最后再通过一个有10个节点的密集全连接层。专家希望从神经网络中得到一个输出，这个输出是输入图像属于10个类别中每个类别的概率分布，哪个函数会产生所需的输出？ A Machine Learning Specialist is building a convolutional neural network (CNN) that will classify 10 types of animals. The Specialist has built a series of layers in a neural network that will take an input image of an animal, pass it through a series of convolutional and pooling layers, and then finally pass it through a dense and fully connected layer with 10 nodes. The Specialist would like to get an output from the neural network that is a probability distribution of how likely it is that the input image belongs to each of the 10 classes Which function will produce the desired output?
    - [ ] A. Dropout
    - [ ] B. Smooth L1 loss
    - [ ] C. Softmax
    - [ ] D. Rectified linear units (ReLU)

    <details>
       <summary>Answer</summary>

       答案C： softmax是将数字变成概率。

    </details>

50. 一位机器学习专家训练了一个回归模型，但第一个迭代需要优化。专家需要了解该模型是更频繁地高估还是低估了目标值。专家可以使用什么选项来确定它是否高估或低估了目标值？ A Machine Learning Specialist trained a regression model, but the first iteration needs optimizing. The Specialist needs to understand whether the model is more frequently overestimating or underestimating the target. What option can the Specialist use to determine whether it is overestimating underestimating the target value?
    - [ ] A. 均方根误差(RMSE) Root Mean Square Error (RMSE)
    - [ ] B. 残差图 Residual plots
    - [ ] C. 曲线下面积 Area under the curve
    - [ ] D. 混淆矩阵 Confusion matrix

    <details>
       <summary>Answer</summary>

       答案B：残差图的分布表明了高估或低估的情况，AUC和混淆矩阵用于分类问题，而不是回归。RMSE说的是误差值，而不是误差的符号。

    </details>

51. 一家公司希望将用户行为分类为欺诈行为或正常行为。根据内部研究，一位机器学习专家希望建立一个基于两个特征的二进制分类器：账户年龄和交易月份。这些特征的类别分布如图所示。基于这些信息，哪个模型对欺诈类的召回率最高？ A company wants to classify user behavior as either fraudulent or normal. Based on internal research, a Machine Learning Specialist would like to build a binary classifier based on two features: age of account and transaction month. The class distribution for these features is illustrated in the figure provided. Based on this information, which model would have the HIGHEST recall with respect to the fraudulent class?

    ![51](./img/51.png)

    - [ ] A. 决策树 Decision tree
    - [ ] B. 线性支持向量机(SVM) Linear support vector machine (SVM)
    - [ ] C. 奈何贝叶斯分类器 Naive Bayesian classifier
    - [ ] D. 带有西格玛激活函数的单感知器 Single Perceptron with sigmoidal activation function
  
    <details>
       <summary>Answer</summary>

       答案A。

    </details>

52. 一位机器学习专家使用Amazon SageMaker，以ROC曲线下面积（AU）为目标指标，为一个基于树的集合模型启动了超参数调整工作。这个工作流程最终将被部署在一个管道中，每天晚上重新训练和调整超参数，为每4小时变质的数据建立点击模型。为了减少训练这些模型所需的时间，并最终降低成本，专家希望重新配置输入的超参数范围，哪种可视化方法可以实现这一目标？ A Machine Learning Specialist kicks off a hyperparameter tuning job for a tree-based ensemble model using Amazon SageMaker with Area Under the ROC Curve (AU) as the objective metric. This workflow will eventually be deployed in a pipeline that retrains and tunes hyperparameters each night to model click-through on data that goes stale every 4 hours. With the goal of decreasing the amount of me it takes to train these models, and ultimately to decrease costs, the Specialist wants to reconfigure the input hyperparameter range(s) Which visualization will accomplish this?
    - [ ] A. 显示最重要的输入特征是否为高斯的直方图。 A histogram showing whether the most important input feature is Gaussian.
    - [ ] B. 使用t分布的随机邻接嵌入（t-SNE）的散点图，将大量的输入变量在一个更容易阅读的维度上可视化。 A scatter plot with points colored by target variable that uses t-distributed Stochastic Neighbor Embedding (t-SNE) to visualize the large number of input variables in an easier-to-read dimension.
    - [ ] C. 显示每个训练迭代中目标指标性能的散点图。 A scatter plot showing the performance of the objective metric over each training iteration
    - [ ] D. 显示最大树深和目标度量之间的相关性的散点图。 A scatter plot showing the correlation between maximum tree depth and the objective metric.
  
    <details>
       <summary>Answer</summary>

       答案D：这是一个非常棘手的问题。我们的想法是重新配置超参数的范围。A指的是一个特征，而不是一个超参数。A出局了。C指的是训练模型，而不是优化超参数的范围。C不适用。现在变得很棘手了。D会让你找到确定近似最佳树的深度。这很好。这就是你要做的，但它只是众多超参数中的一个。这是目前最好的选择。B很棘手。t-SNE确实能帮助你将多维数据可视化，但选项B指的是输入变量，而不是超参数。对于这个非常棘手的问题，我会选择D。它是唯一一个能完成限制超参数范围的任务的，即使它只是其中之一。

    </details>

53. 一位机器学习专家正在创建一个新的自然语言处理应用程序，处理一个由一百万句子组成的数据集。其目的是运行Word2Vec来生成句子的嵌入，并实现不同类型的预测。下面是数据集中的一个例子。`The quck BROWN FOX jumps over the lazy dog.`。以下哪些是专家需要执行的操作，以正确消毒和准备数据的可重复方式？(选择三个) A Machine Learning Specialist is creatin a new natural language processing application that processes a dataset comprised of one million sentences. The aim is to then run Word2Vec to generate embeddings of the sentences and enable different types of predictions. Here is an example from the dataset: `The quck BROWN FOX jumps over the lazy dog.` Which of the following are the operations the specialist needs to perform to correctly sanitize and prepare the data a repeatable manner? (Choose three)
    - [ ] A. 进行语义部分标记，只保留动作动词和名词。 Perform part-of-speech tagging and keep the action verb and the nouns only.
    - [ ] B. 通过使句子小写来规范所有单词。 Normalize all words by making the sentence lowercase.
    - [ ] C. 使用英语停止词词典删除停止词。 Remove stop words using an English stop word dictionary.
    - [ ] D. 将 "quck "的排版修改为 "quick"。 Correct the typography on "quck" to "quick.
    - [ ] E. 对句子中的所有单词进行单热编码。 One-hot encode all words in the sentence.
    - [ ] F. 将该句子标记为单词。 Tokenize the sentence into words.

    <details>
       <summary>Answer</summary>

       答案BCF。

    </details>

54. 一位数据科学家正在评估不同的二进制分类模型。一个错误的阳性结果比一个错误的阴性结果要昂贵5倍（从商业角度来看）。应该根据以下标准来评估这些模型。1）必须有至少80%的召回率。2) 必须有10%或更少的假阳性率。3）必须使商业成本最小化。在创建每个二元分类模型后，数据科学家会生成相应的混淆矩阵。哪个混淆矩阵代表满足要求的模型？ A Data Scientist is evaluating different binary classification models. A false positive result is 5 times more expensive (from a business perspective) than a false negative result. The models should be evaluated based on the following criteria: 1) Must have a recall rate of at least 80%. 2) Must have a false positive rate of 10% or less. 3) Must minimize business costs. After creating each binary classification model, the Data Scientist generates the corresponding confusion matrix. Which confusion matrix represents the model that satisfies the requirements?
    - [ ] A.TN=91, FP=9, FN=22, TP=78
    - [ ] B.TN=99, FP=1, FN=21, TP=79
    - [ ] C.TN=96, FP=4, FN=10, TP=90
    - [ ] D.TN=98, FP=2, FN=18, TP=82

    <details>
       <summary>Answer</summary>

       答案D。

       ![54](img/54.png)

    </details>

55. 一位数据科学家使用逻辑回归来建立一个欺诈检测模型。虽然模型的准确率为99%，但90%的欺诈案件没有被模型发现。什么行动可以明确地帮助模型检测出10%以上的欺诈案件？ A Data Scientist uses logistic regression to build a fraud detection model. While the model accuracy is 99%, 90% of the fraud cases are not detected by the model. What action will definitively help the model detect more than 10% of fraud cases?
    - [ ] A. 使用不足的采样来平衡数据集 Using under sampling to balance the dataset
    - [ ] B. 降低类别概率阈值 Decreasing the class probability threshold
    - [ ] C. 使用正则化来减少过度拟合 Using regularization to reduce overfitting
    - [ ] D. 使用过量取样来平衡数据集 Using oversampling to balance the dataset

    <details>
       <summary>Answer</summary>

       答案B：降低类别概率阈值使模型更加敏感，因此，将更多的案例标记为阳性类别，在这种情况下就是欺诈。这将增加欺诈检测的可能性。然而，它是以降低精确度为代价的。

    </details>

56. 机器学习专家正在建立一个模型，以预测基于广泛的经济行为者的未来就业率，同时探索数据，专家注意到输入特征的大小差异很大。专家不希望幅度较大的变量在模型中占主导地位。专家应该做什么来准备模型训练的数据？ Machine Learning specialist is building a model to predict future employment rates based on a wide range of economic actors while exploring the data, the Specialist notices that the magnitude of the input features vary greatly. The Specialist does not want variables with a larger magnitude to dominate the model. What should the Specialist do to prepare the data for model training?
    - [ ] A. 应用量化分档法，将数据分为分类分档，通过用分布代替幅度来保持数据中的任何关系。 Apply quantile binning to group the data into categorical bins to keep any relationships in the data by replacing the magnitude with distribution.
    - [ ] B. 应用笛卡尔乘积转换，创建独立于幅度的新组合字段。 Apply the Cartesian product transformation to create new combinations of fields that are independent of the magnitude.
    - [ ] C. 应用标准化，确保每个字段的平均值为0，方差为1，以消除任何重要的幅度。 Apply normalization to ensure each field will have a mean of 0 and a variance of I to remove any significant magnitude.
    - [ ] D. 应用正交稀疏大图（OSB）变换，应用固定大小的滑动窗口来产生类似幅度的新特征。 Apply the orthogonal sparse bigram (OSB) transformation to apply a fixed-size sliding window to generate new features of a similar magnitude.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

57. 一位机器学习专家必须建立一个流程，使用Amazon Athena查询Amazon S3上的数据集。该数据集包含超过800.000条记录，以纯文本CSV文件形式存储。每条记录包含200列，大小约为1.5MB。大多数查询将只跨越5到10列。机器学习专家应该如何转换数据集以减少查询的运行时间？ A Machine Learning Specialist must build out a process to query a dataset on Amazon S3 using Amazon Athena. The dataset contains more than 800.000 records stored as plaintext CSV files. Each record contains 200 columns and is approximately 1. 5 MB in size. Most queries will span 5 to 10 columns only. How should the Machine Learning Specialist transform the dataset to minimize query runtime?
    - [ ] A. Convert the records to Apache Parquet format
    - [ ] B. Convert the records to JSON format
    - [ ] C. Convert the records to GZIP CSV format
    - [ ] D. Convert the records to XML format

    <details>
       <summary>Answer</summary>

       答案A。

    </details>

58. 一位机器学习专家正在开发一个包含多个ETL工作的日常ETL工作流程。该工作流程由以下过程组成。1）一旦数据被上传到Amazon S3，立即启动工作流程。2) 当所有的数据集在Amazon S3中可用时，启动ETL作业，将上传的数据集与已经存储在Amazon S3中的多个TB级的数据集连接起来。3) 将连接数据集的结果存储在Amazon S3中。4) 如果其中一个作业失败，向管理员发送一个通知。哪种配置可以满足这些要求？ A Machine Learning Specialist is developing a daily ETL workflow containing multiple ETL jobs. The workflow consists of the following processes: 1) Start the workflow as soon as data is uploaded to Amazon S3. 2) When all the datasets are available in Amazon S3, start an ETL job to join the uploaded datasets with multiple terabyte-sized datasets already stored n Amazon S3. 3) Store the results of joining datasets in Amazon S3. 4) If one of the jobs fails, send a notification to the Administrator. Which configuration will meet these requirements?
    - [ ] A. 使用AWS Lambda来触发AWS Step Functions工作流，以等待数据集在Amazon S3中完成上传。使用AWS Glue来连接数据集。使用Amazon CloudWatch警报，在失败的情况下向管理员发送SNS通知。 Use AWS Lambda to trigger an AWS Step Functions workflow to wait for dataset uploads to complete in Amazon S3. Use AWS Glue to join the datasets. Use an Amazon CloudWatch alarm to send an SNS notification to the Administrator in the case of a failure.
    - [ ] B. 使用AWS Lambda开发ETL工作流程，启动Amazon SageMaker笔记本实例。使用生命周期配置脚本来连接数据集并将结果持久化在Amazon S3中。使用Amazon Cloud Watch警报，在发生故障时向管理员发送SNS通知。 Develop the ETL workflow using AWS Lambda to start an Amazon SageMaker notebook instance. Use a lifecycle configuration script to join the datasets and persist the results in Amazon S3. Use an Amazon CloudWatch alarm to send an SNS notification to the Administrator in the case of a failure
    - [ ] C. 使用AWS Batch开发ETL工作流程，当数据上传到Amazon S3时触发ETL工作的开始。使用AWS Glue在Amazon S3的数据集上。使用Amazon Cloud Watch警报，在发生故障时向管理员发送SNS通知。 Develop the ETL workflow using AWS Batch to trigger the start of ETL jobs when data is uploaded to Amazon S3. Use AWS Glue to on the datasets in Amazon S3. Use an Amazon Cloud Watch alarm to send an SNS notification to the Administrator in the case of a failure.
    - [ ] D. 使用AWS Lambda连锁其他Lambda函数，在数据上传到Amazon S3后立即读取和加入Amazon S3中的数据集。使用Amazon CloudWatch警报，在发生故障时向管理员发送SNS通知。 Use AWS Lambda to chain other Lambda functions to read and join the datasets in Amazon S3 as soon as the data is uploaded to Amazon S3. Use an Amazon CloudWatch alarm to send an SNS notification to the Administrator in the case of a failure.

    <details>
       <summary>Answer</summary>

       - A: 正确。S3事件可以触发AWS Lambda函数。
       - B: 错了。在提供的上下文中，与SageMaker没有任何关系。
       - C: 错了。AWS Batch 不能直接接收来自 S3 的事件。
       - D: 错了。将不会满足要求。"当所有的数据集在Amazon S3中可用时..."

    </details>

59. 一个机构在一个国家内收集人口普查信息，以确定各省市的医疗保健和社会项目需求。普查表收集了每个公民对大约500个问题的回答。哪种算法组合可以提供适当的洞察力？(选择两个) An agency collects census information within a country to determine healthcare and social program needs by province and city. The census form collects response for approximately 500 questions from each citizen. Which combination of algorithms would provide the appropriate insights? (Select TWO)
    - [ ] A. 因式分解机（FM）算法。 The factorization machines (FM) algorithm.
    - [ ] B. Latent Dirichlet Allocation（LDA）算法。 The Latent Dirichlet Allocation (LDA) algorithm.
    - [ ] C. 主成分分析（PCA）算法。 The principal component analysis (PCA)algorithm.
    - [ ] D. k-means算法。 The k-means algorithm.
    - [ ] E. 随机切割森林（RCF）算法。 The Random Cut Forest (RCF) algorithm.

    <details>
       <summary>Answer</summary>

       - C：正确。使用PCA来减少变量的数量。每个公民的回答应该有500个问题的答案，所以它应该有500个变量。
       - D: 正确。使用K-means聚类法
       - A: 错误。因子化机器算法通常用于处理高维稀疏数据集的任务。
       - B: 错误。Latent Dirichlet Allocation（LDA）算法应该用于处理NLP中的主题建模任务。
       - E: 错误。随机切割森林应该用于检测数据中的异常情况。

    </details>

60. 一家消费品制造商有以下产品在销售。1）34种不同的牙膏品种。2) 48种不同的牙刷。3) 48种不同的漱口水。所有这些产品的整个销售历史都可以在Amazon S3中找到。目前，该公司正在使用定制的自回归综合移动平均模型（ARIMA）来预测这些产品的需求。该公司希望预测即将推出的新产品的需求。机器学习专家应该应用哪种解决方案？ A are consumer goods manufacturer has the following products on sale: 1) 34 different toothpaste variants. 2) 48 different toothbrush variants. 3) 48 different mouthwash variants. The entire sales history of all these products is available in Amazon S3. Currently, the company is using custom-built autoregressive integrated moving average (ARIMA) models to forecast demand for these products. The company wants to predict the demand for a new product that will soon be launched. Which solution should a Machine Learning Specialist apply?
    - [ ] A. 训练一个自定义的ARIMA模型来预测新产品的需求。 Train a custom ARIMA model to forecast demand for the new product.
    - [ ] B. 训练一个Amazon SageMaker DeepAR算法来预测新产品的需求。 Train an Amazon SageMaker DeepAR algorithm to forecast demand for the new product.
    - [ ] C. 训练一个Amazon SageMaker k-means聚类算法来预测新产品的需求。Train an Amazon SageMaker k-means clustering algorithm to forecast demand for the new product.
    - [ ] D. 训练一个自定义的XGBboost模型来预测新产品的需求。 Train a custom XGBboost model to forecast demand for the new product.

    <details>
       <summary>Answer</summary>

       答案B：Amazon SageMaker DeepAR预测算法是一种监督学习算法，用于使用循环神经网络（RNN）预测标量（一维）时间序列。经典的预测方法，如自回归综合移动平均法（ARIMA）或指数平滑法（ETS），对每个单独的时间序列拟合一个模型。然后他们使用该模型将时间序列推断到未来。

    </details>

61. 一位机器学习专家将一个数据集上传到Amazon S3桶中，并使用AWS KMS进行服务器端加密保护。ML专家应该如何定义Amazon SageMaker笔记本实例，以便它可以从Amazon S3读取相同的数据集？ A Machine Learning Specialist uploads a dataset to an Amazon S3 bucket protected with server-side encryption using AWS KMS. How should the ML Specialist define the Amazon SageMaker notebook instance so it can read the same dataset from Amazon S3?
    - [ ] A. 定义安全组，允许所有HTTP入站/出站流量，并将这些安全组分配给Amazon SageMaker笔记本实例。 Define security group(s) to allow all HTTP inbound/outbound traffic and assign those security group(s) to the Amazon SageMaker notebook instance.
    - [ ] B. 配置Amazon SageMaker笔记本实例，使其能够访问VPC。在KMS密钥策略中为笔记本的KMS角色授予权限。 Configure the Amazon SageMaker notebook instance to have access to the VPC. Grant permission in the KMS key policy to the notebooks KMS role.
    - [ ] C. 为Amazon SageMaker笔记本分配一个IAM角色，使其具有对数据集的S3读取权限。在KMS密钥策略中为该角色授予权限。 Assign an IAM role to the Amazon SageMaker notebook with S3 read access to the dataset. Grant permission in the KMS key policy to that role.
    - [ ] D. 将用于在Amazon S3中加密数据的相同KMS密钥分配给Amazon SageMaker笔记本实例。 Assign the same KMS key used to encrypt data in Amazon S3 to the Amazon SageMaker notebook instance.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

62. 一家公司对建立一个欺诈检测模型感兴趣。目前，由于欺诈案件的数量很少，数据科学家没有足够的信息量。哪种方法最可能检测到最多数量的有效欺诈案件？ A company is interested in building a fraud detection model. Currently the Data Scientist does not have a sufficient amount of information due to the low number of fraud cases. Which method is MOST likely to detect the GREATEST number of valid fraud cases?
    - [ ] A. 使用引导法进行过度取样 Oversampling using bootstrapping
    - [ ] B. 低度取样 Undersampling
    - [ ] C. 使用SMOTE的过度取样 Oversampling using SMOTE
    - [ ] D. 类别权重调整 Class weight adjustment

    <details>
       <summary>Answer</summary>

       答案C：对于没有完全填充的数据集，SMOTE通过向少数类添加合成数据点来增加新的信息。在这种情况下，这种技术将是最有效的。

    </details>

63. 一位机器学习工程师正在准备一个数据框架，用于使用Amazon SageMaker近似学习者算法的监督学习请求。该ML工程师注意到目标标签类是高度不平衡的，并且多个特征列包含缺失值。在整个数据框架中，缺失值的比例小于5%。ML工程师应该怎么做才能将缺失值造成的偏差降到最低？ A Machine Learning Engineer is preparing a data frame for a supervised learning ask with the Amazon SageMaker near Learner algorithm. The ML Engineer notices the target label classes are highly imbalanced and multiple feature columns contain missing values. The proportion of missing values across the entire data frame is less than 5%. What should the ML Engineer do to minimize bias due to missing values?
    - [ ] A. 用同一行中非缺失值的平均数或中位数来替换每个缺失值。 Replace each missing value by the mean or median across non-missing values in same row.
    - [ ] B. 删除包含缺失值的观察值，因为这些观察值只占数据的50％以下。 Delete observations that contain missing values because these represent less than 50 of the data.
    - [ ] C. 用同一列中非缺失值的平均数或中位数替换每个缺失值。 Replace each missing value by the mean or median across non-missing values in the same column.
    - [ ] D. 对于每个特征，使用基于其他特征的监督学习来近似计算缺失值。 For each feature, approximate the missing values using supervised learning based on other features.

    <details>
       <summary>Answer</summary>

       答案D：使用监督学习来预测基于其他特征值的缺失值。不同的监督学习方法可能有不同的表现，但任何正确实施的监督学习方法都应该提供与平均数或中位数近似相同或更好的近似，如回答A和C中提出的监督学习应用于缺失值的推算是一个活跃的研究领域。

    </details>

64. 一位机器学习专家使用少量的数据样本为一家公司完成了概念验证，现在专家准备使用Amazon SageMaker在AWS中实施一个端到端的解决方案，历史训练数据存储在Amazon RDS中。专家应该使用哪种方法来训练使用该数据的模型？ A Machine Learning Specialist has completed a proof of concept for a company using a small data sample, and now the Specialist is ready to implement an end-to-end solution in AWS using Amazon SageMaker The historical training data is stored in Amazon RDS. Which approach should the Specialist use for training a model using that data?
    - [ ] A. 在笔记本内写一个与SQL数据库的直接连接，把数据拉进来。 Write a direct connection to the SQL database within the notebook and pull data in.
    - [ ] B. 使用AWS数据管道将数据从Microsoft SQL Server推送到Amazon S3，并在笔记本中提供S3位置。 Push the data from Microsoft SQL Server to Amazon S3 using an AWS Data Pipeline and provide the S3 location within the notebook.
    - [ ] C. 将数据移到亚马逊DynamoDB，并在笔记本内设置与DynamoDB的连接，以拉入数据。 Move the data to Amazon DynamoDB and set up a connection to DynamoDB within the notebook to pull data in.
    - [ ] D. 使用AWS DMS将数据移到Amazon ElastiCache，并在笔记本内设置一个连接，以拉入数据，实现快速访问。 Move the data to Amazon ElastiCache using AWS DMS and set up a connection within the notebook to pull data in for fast access.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

65. 一位机器学习专家为一个在线购物网站接收客户数据。这些数据包括人口统计学，过去的访问，和地区信息。专家必须开发一种机器学习方法来识别客户的购物模式、偏好和趋势，以加强网站的服务和智能推荐。该专家应该推荐哪种解决方案？ A Machine Learning Specialist receives customer data for an online shopping website. The data includes demographics, past visits, and locality information. The Specialist must develop a machine learning approach to identify the customer shopping patterns, preferences, and trends to enhance the website-for better service and smart recommendations. Which solution should the Specialist recommend?
    - [ ] A. 对于给定的离散数据集合，采用Latent Dirichlet Allocation（LDA）来识别客户数据库中的模式。 Latent Dirichlet Allocation (LDA) for the given collection of discrete data to identify patterns in the customer database.
    - [ ] B. 一个至少有三层和随机初始权重的神经网络来识别客户数据库中的模式。 A neural network with a minimum of three layers and random initial weights to identify patterns in the customer database.
    - [ ] C. 基于用户互动和相关关系的协同过滤，以识别客户数据库中的模式。 Collaborative filtering based on user interactions and correlations to identify patterns in the customer database.
    - [ ] D. 通过随机子样本的随机切割森林（RCF）来识别客户数据库中的模式。 Random Cut Forest (RCF) over random subsamples to identify patterns in the customer database.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

66. 一家公司希望使用自动机器学习（ML）的随机切割森林（RCF）算法来可视化复杂的实词场景，例如检测季节性和趋势，排除外在因素，以及估算缺失值。从事这个项目的团队是非技术性的，他们正在寻找一个开箱即用的解决方案，需要最少的管理开销。哪种解决方案可以满足这些要求？ A company wants to use an automatic machine learning (ML) Random Cut Forest (RCF) algorithm to visualize complex real-word scenarios, such as detecting seasonality and trends, excluding outers, and imputing missing values. The team working on this project is non-technical and is looking for an out-of-the-box solution that will require the LEAST amount of management overhead. Which solution will meet these requirements?
    - [ ] A. 使用AWS Glue ML转换来创建一个预测，然后使用Amazon QuickSight来可视化数据。 Use an AWS Glue ML transform to create a forecast and then use Amazon QuickSight to visualize the data.
    - [ ] B. 使用亚马逊QuickSight来可视化数据，然后使用ML驱动的预测来预测关键业务指标。 Use Amazon QuickSight to visualize the data and then use ML-powered forecasting to forecast the key business metrics.
    - [ ] C. 使用来自AWS市场的预构建ML AMI来创建预测，然后使用Amazon QuickSight来可视化数据。 Use a pre-build ML AMI from the AWS Marketplace to create forecasts and then use Amazon QuickSight to visualize the data.
    - [ ] D. 使用计算字段来创建一个新的预测，然后使用Amazon QuickSight来可视化数据。 Use calculated fields to create a new forecast and then use Amazon QuickSight to visualize the data.

    <details>
       <summary>Answer</summary>

       答案B：[ref](https://docs.aws.amazon.com/zh_cn/quicksight/latest/user/making-data-driven-decisions-with-ml-in-quicksight.html)。

    </details>

67. 一家在线快递公司希望在下订单的时候为每次送货选择最快的快递员。该公司希望为其应用程序的现有用户和新用户实现这一功能。数据科学家为此用XGBoost训练了不同的模型，这些模型被存储在Amazon S3中。该公司运营的每个城市都有一个模型。运营工程师将这些模型托管在亚马逊EC2中，用于响应网络客户端的请求，每个模型有一个实例，但这些实例的CPU和内存利用率只有5%。运营工程师希望避免管理不必要的资源。哪种解决方案可以使该公司以最少的运营开销实现其目标？ An online delivery company wants to choose the fastest courier for each delivery at the moment an order is placed. The company wants to implement this feature for existing users and new users of its application. Data scientists have trained separate models with XGBoost for this purpose, and the models are stored in Amazon S3. There is one model for each city where the company operates. Operation engineers are hosting these models in Amazon EC2 for responding to the web client requests, with one instance for each model, but the instances have only a 5% utilization in CPU and memory. The operation engineers want to avoid managing unnecessary resources. Which solution will enable the company to achieve its goal with the LEAST operational overhead?
    - [ ] A. 创建一个Amazon SageMaker笔记本实例，使用boto3库从Amazon S3提取所有模型。删除现有的实例，并使用笔记本来执行SageMaker批量转换，为所有城市的所有可能的用户进行离线推断。将结果存储在Amazon S3的不同文件中。将网络客户端指向这些文件。 Create an Amazon SageMaker notebook instance for pulling all the models from Amazon S3 using the boto3 library. Remove the existing instances and use the notebook to perform a SageMaker batch transform for performing, inferences offline for all the possible users in all the cities. Store the results in different files in Amazon S3. Point the web client to the files.
    - [ ] B. 准备一个基于开源多模型服务器的Amazon SageMaker Docker容器。删除现有的实例，在SageMaker中创建一个多模型端点，指向包含所有模型的S3桶。在运行时从 Web 客户端调用该端点，根据每个请求的城市指定目标模型参数。 Prepare an Amazon SageMaker Docker container based on the open-source multi-model server. Remove the existing instances and create a multi-model endpoint in SageMaker instead, pointing to the S3 bucket containing all the models. Invoke the endpoint from the web client at runtime, specifying the Target Model parameter according to the city of each request.
    - [ ] C. 只保留一个EC2实例来托管所有模型。在该实例中安装一个模型服务器，并通过从亚马逊S3中提取模型来加载每个模型。使用亚马逊API网关将该实例与Web客户端集成，以实时响应请求，根据每个请求的城市指定目标资源。 Keep only a single EC2 instance for hosting all the models. Install a model server in the instance and load each model by pulling it from Amazon S3. Integrate the instance with the web client using Amazon API Gateway for responding to the requests in real time, specifying the target resource according to the city of each request.
    - [ ] D. 根据Amazon SageMaker中预先构建的图像准备一个Docker容器。用单独的SageMaker端点替换现有的实例，公司运营的每个城市都有一个端点，从Web客户端调用端点，根据每个请求的城市指定URL和端点名称参数。 Prepare a Docker container based on the prebuilt images in Amazon SageMaker. Replace the existing instances with separate SageMaker endpoints, one for each city where the company operates invoke the endpoints from the web client, specifying the URL and Endpoint Name parameter according to the city of each request.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

68. 一家零售公司希望将其客户订单与产品目录中的产品描述数据结合起来。每个数据集中的记录的结构和格式是不同的。一个数据分析员试图使用电子表格来合并数据集，但这一努力导致了重复的记录和没有被正确合并的记录。该公司需要一个解决方案，它可以用来合并两个数据集中的类似记录并删除任何重复的记录。哪种解决方案可以满足这些要求？ A retail company wants to combine its customer orders with the product description data from its product catalog. The structure and format of the records in each dataset is different. A data analyst tried to use a spreadsheet to combine the datasets, but the effort resulted in duplicate records and records that were not properly combined. The company needs a solution that it can use to combine similar records from the two datasets and remove any duplicates. Which solution will meet these requirements?
    - [ ] A. 使用一个AWS Lambda函数来处理数据。使用两个数组来比较两个数据集中的字段的相等字符串，并删除任何重复的内容。 Use an AWS Lambda function to process the data. Use two arrays to compare equal strings in the fields from the two datasets and remove any duplicate.
    - [ ] B. 创建AWS Glue爬虫，用于读取和填充AWS Glue数据目录。调用AWS Glue Search Tables API操作，对这两个数据集进行模糊匹配搜索，并对数据进行相应的清理。 Create AWS Glue crawlers for reading and populating the AWS Glue Data Catalog. Call the AWS Glue Search Tables API operation to perform a fuzzy-matching search on the two datasets and cleanse the data accordingly.
    - [ ] C. 创建AWS Glue爬虫，用于读取和填充AWS Glue数据目录。使用查找匹配转换来清理数据。 Create AWS Glue crawlers for reading and populating the AWS Glue Data catalog. Use the Find matches transform to cleanse the data.
    - [ ] D. 创建一个AWS Lake Formation自定义转换。从Lake Formation控制台运行匹配产品的转换，以自动清理数据。 Create an AWS Lake Formation custom transform. Run a transformation for matching products from the Lake Formation console to cleanse the data automatically.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

69. 一家电信公司正在为其客户开发一个移动应用程序。该公司正在使用Amazon SageMaker托管端点进行机器学习模型推断。开发人员希望为订阅了应用程序预览功能的有限数量的用户引入一个新版本的模型。在新版模型作为预览版被测试后，开发者将评估其准确性。如果新版本的模型有更好的准确性，开发者需要能够在固定的时间内逐步为所有用户发布新版本。公司怎样才能以最少的操作开销来实施测试模型？ A telecommunications company is developing a mobile app for its customers. The company is using an Amazon SageMaker hosted endpoint for machine learning model inferences. Developers want to introduce a new version of the model for a limited number of users who subscribed to a preview feature of the app. After the new version of the model is tested as a preview, developers will evaluate its accuracy. If a new version of the model has better accuracy developers need to be able to gradually release the new version for all users over a fixed period of me. How can the company implement the testing model with the LEAST amount of operational overhead?
    - [ ] A. 通过使用`CreateEndpointConfig`操作，用新版本的模型更新`ProductionVariant`数据类型，初始的八个参数设置为0。 为订阅预览功能的用户指定`InvokeEndpoint`调用的`TargetVariant`参数。当新版本的模型准备发布时，逐渐增加`InitialVariantWeight`，直到所有用户都有更新的版本。 Update the `ProductionVariant` data type with the new version of the model by using the `CreateEndpointConfig` operation with the initial eight parameter set to 0. Specify the `TargetVariant` parameter for `InvokeEndpoint` calls for users who subscribed to the preview feature. When the new version of the model is ready for release, gradually increase `InitialVariantWeight` until all users have the updated version.
    - [ ] B. 配置两个SageMaker托管端点，为不同版本的模式服务。创建一个应用程序负载平衡器（ALB），根据`TargetVariant`查询字符串参数将流量发送到端点。重新配置应用程序，为订阅预览功能的用户发送`TargetVariant`查询字符串参数。当新版本的模型准备发布时，将ALBs路由算法改为加权算法，直到所有用户都有更新的版本。 Configure two SageMaker hosted endpoints that serve the different versions of the mode. Create an Application Load Balancer (ALB) to route traffic to endpoint based on the `TargetVariant` query string parameter. Reconfigure the app to send the `TargetVariant` query string parameter for users who subbed o the preview feature. When the new version of the model is ready for release change the ALBs routing algorithm to weighted until all users have the updated version.
    - [ ] C. 通过使用`UpdateEndpointWeighsAndCapacies`操作，用新版本的模型更新期望权重和容量数据类型，期望的8个参数设置为0，为订阅预览功能的用户指定 "InvokeEndpoint "调用的 "TargetVariant "参数。当模型的新版本准备发布时，逐渐增加Desired weight，直到所有用户都有更新的版本。 Update the Desired Weights and Capacity data type with the new version of the model by using the `UpdateEndpointWeighsAndCapacies` operation with the Desired eight parameter set to 0, Specify the `TargetVariant` parameter for `InvokeEndpoint` calls for users who subscribed to the preview feature. When the new version of the model is ready for release, gradually increase Desired weight until all users have the updated version.
    - [ ] D. 配置两个SageMaker托管端点，为模型的不同版本提供服务。创建一个亚马逊Route53记录，该记录配置了一个简单的路由策略，并指向模型的当前版本 配置移动应用程序，为订阅了预览功能的用户使用端点URL，为其他用户使用Route53记录。当模型的新版本准备发布时，向 Route 53 添加一个新的模式。版本端点，并将策略切换为加权，直到所有用户拥有更新的版本。 Configure two SageMaker hosted endpoints that serve the different versions of the model. Create an Amazon Route53 record that is configured with a simple routing policy and that points to the current version of the model Configure the mobile app to use the end point URL for users who subscribed to the preview feature and to use the Route 53 record for other users. When the new version of the model is ready for release, add a new mode. version endpoint to Route 53, and switch the policy to weighted until all users have the updated version.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

70. 一家公司向其客户提供在线购物服务。该公司希望通过在客户从不同于其正常位置的地方访问网站时要求提供额外的信息来加强网站的安全性。该公司希望更新流程，调用机器学习（ML）模型来确定何时应要求提供额外信息。该公司拥有来自其现有电子商务网络服务器的数TB数据，其中包含向网络服务器提出的每个请求的源IP地址。对于认证的请求，这些记录还包含请求用户的登录名。ML专家应该采取哪种方法来实现网络应用程序中的新安全功能？ A company offers an online shopping service to its customers. The company wants to enhance the sites security by requesting additional information when customers access the site from locations that are different from their normal location. The company wants to update the process to call a machine learning (ML) model to determine when additional information should be requested. The company has several terabytes of data from its existing ecommerce web servers containing the source IP addresses for each request made to the web server. For authenticated requests, the records also contain the login name of the requesting user. Which approach should an ML specialist take to implement the new security feature in the web application?
    - [ ] A. 使用Amazon SageMaker Ground Truth将每个记录标记为成功或失败的访问尝试。使用Amazon SageMaker，使用因子化机器（FM）算法训练一个二进制分类模型。 Use Amazon SageMaker Ground Truth to label each record as either a successful or failed access attempt. Use Amazon SageMaker to train a binary classification model using the factorization machines (FM) algorithm.
    - [ ] B. 使用Amazon SageMaker训练一个使用IP Insights算法的模型。每晚使用新的日志数据安排模型的更新和再训练。 Use Amazon SageMaker to train a model using the IP Insights algorithm. Schedule updates and retraining of the model using new log data nightly.
    - [ ] C. 使用Amazon SageMaker Ground Truth将每个记录标记为成功或失败的访问尝试。使用Amazon SageMaker来训练一个使用IP Insights算法的二进制分类模型。 Use Amazon SageMaker Ground Truth to label each record as either a successful or failed access attempt. Use Amazon SageMaker to train a binary classification model using the IP Insights algorithm.
    - [ ] D. 使用Amazon SageMaker训练一个使用Objective算法的模型。每晚使用新的日志数据安排模型的更新和再训练。 Use Amazon SageMaker to train a model using the Objective algorithm. Schedule updates and retraining of the model using new log data nightly.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

71. 一家公司正在使用Amazon SageMaker为一项在线服务部署一个新版本的分类模型。服务利用率接近24/7，而且没有定义维护窗口来部署和测试新模型。公司高管担心，如果新模型在生产中表现得不尽如人意，可能会对用户体验产生影响。在Amazon SageMaker上部署新模型的最简单的方法是什么，以减少对用户体验的潜在影响？ A company is deploying a new version of a classification model for an online service using Amazon SageMaker. Service utilization is close to 24/7, and there are no maintenance windows defined to deploy and test the new model. Company executives are concerned about the potential impact on user experience if the new model does not behave as expected in production. What is the SIMPLEST way to deploy the new model on Amazon SageMaker to reduce the potential impact on user experience?
    - [ ] A. 将新模型作为生产变体部署在与现有模型相同的端点上，假定初始流量为50%，然后逐渐减少流量。 Deploy the new model as a production variant on the same endpoint as the existing model conure an initial traffic flow of 50%, and then gradually decrease the traffic flow.
    - [ ] B. 在一个端点上部署新模型，用弹性负载平衡器分配用户请求。 Deploy the new model on an endpoint and distribute user requests with an Elastic Load Balancer.
    - [ ] C. 将新模型作为生产变体部署在与现有模型相同的端点上，确定初始流量为10%，然后逐渐增加流量。 Deploy the new model as a production variant on the same endpoint as the existing model, conure an initial traffic low of 10%, and then gradually increase the traffic flow.
    - [ ] D. 在一个端点上部署新模型，用Amazon CloudFront分配用户请求。 Deploy the new model on an endpoint and distribute user requests with Amazon CloudFront.

    <details>
       <summary>Answer</summary>

       答案D。

    </details>

72. 对于给定的混淆矩阵，该模型的召回率和精确度是多少？ For the given confusion matrix, what is the recall and precision of the model?

    ||Yes|No|
    |-|--|---|
    |Yes|12|3|
    |No|1|9|

    - [ ] A. Recall=0.92, Precision=0.84
    - [ ] B. Recall=0.84, Precision=0.8
    - [ ] C. Recall=0.92, Precision=0.8
    - [ ] D. Recall=0.8, Precision=0.92

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

73. 一位机器学习专家正在为一项计算机视觉任务在亚马逊EC2 P3实例集群上训练卷积神经网络（CNN）。然而，训练的时间比预期的长。该专家试图降低图像的分辨率以加快训练速度，但准确率下降到可接受的水平以下。哪种技术可以在不明显降低准确性的情况下加快训练速度？(选择两个 A machine learning specialist is raining a convolutional neural network (CNN) on a cluster of Amazon EC2 P3 instances for a computer vision task. However, training is taking longer than expected. The specialist tried reducing the resolution of images to speed up training, but the accuracy dropped below an acceptable level. Which technique may speed up training without significantly degrading accuracy? (Select Two)
    - [ ] A. 使用混合精度。 Use mixed precision.
    - [ ] B. 用全连接层取代卷积层。 Replace convolutional layers with fully connected layers.
    - [ ] C. 从预训练的CNN开始，在训练期间冻结大多数层。 Start with a pretrained CNN and freeze most layers during training.
    - [ ] D. 用G3实例替换P3实例。 Replace the P3 instances with G3 instances.
    - [ ] E. 对每一类的训练数据进行降样，同时保持类的比例平衡。 Downsample training data for each class while keeping the class ratios balanced.

    <details>
       <summary>Answer</summary>

       答案AC。

    </details>

74. 一位数据科学家正在为一个分类建立逻辑回归模型，但一直无法达到可接受的准确度。科学家认为，特征空间不是线性可分离的。有一个强烈的业务需求，即建立一个可解释的模型，其中每个特征在分类中的贡献必须被充分理解。推论必须尽可能快地产生。数据科学家应该采取哪些措施来实现这些目标，并使之付出最少的努力？ A data scientist is building a logistic regression model for a classification but has not been able to achieve acceptable accuracy. The scientist feels that the feature space is not linearly separable. There is a strong business need to build an interpretable model where the contribution of each feature in the classification must be well understood. The inference must be generated as quickly as possible. Which measures should the data scientist take to achieve these goals with the LEAST amount of effort?
    - [ ] A. 对现有的特征进行非线性转换。 Apply nonlinear transformations to the existing features.
    - [ ] B. 使用递归特征消除法，每次从模型中删除一个特征。 Remove features from the model one at a time using recursive feature elimination.
    - [ ] C. 创建一个具有一个或多个隐藏层的多层感知器（MLP）。 Create a multilayer perceptron (MLP) with one or more hidden layers.
    - [ ] D. 创建一个线性回归模型。 Create a linear regression model.

    <details>
       <summary>Answer</summary>

       答案B。

    </details>

75. 一位数据科学家正在分析一个制造数据集，以确定在不同工厂地点组装的产品是否会通过或不通过质量检查。每个观察结果都包括一个工厂的ID，产品的各个方面，以及它是否通过或未通过质量检查。30%的观察值缺少工厂ID，这是有问题的，因为不同的工厂似乎有不同的失败率。数据科学家希望预测产品是否会通过检验，以实现检验过程的自动化。哪种方法可以管理缺少工厂ID的观察结果？ A data scientist is analyzing a manufacturing dataset to determine whether a product assembled a various factory location will pass or fail quality inspections. Each observation includes a factory ID, various aspects of the product and whether it passed or failed the quality inspection. Thirty percent of the observations are missing the factory ID, which is problematic because different factories appear to have different failure rates. The data scientist wants to predict whether the product will pass inspection to automate the inspection process. Which approach can manage observations that are missing the factory ID?
    - [ ] A. 删除与缺失的工厂ID对应的数据集行。 Drop the dataset rows corresponding to the missing factory IDs.
    - [ ] B. 将工厂ID作为工厂ID值的模式来计算。 Impute the factory ID as the mode of the factory ID values.
    - [ ] C. 将工厂ID作为工厂ID值的平均值来计算。 Impute the factory ID as the mean of the factory ID values.
    - [ ] D. 将缺失的工厂ID作为一个分类或替代属性的值来模拟。 Model the missing factory ID as a value of a categorical or substitute attribute.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>

76. 一家经营在线图书馆的公司正在使用Amazon Lex实现一个聊天机器人，以提供基于类别的图书推荐。这个意图是由一个AWS Lambda函数实现的，该函数在给定一个特定类别的情况下，查询一个Amazon DynamoDB表，以获得一个书名列表。为了测试，只有三个类别作为自定义插槽类型实现。喜剧"、"冒险 "和 "纪录片"。一个机器学习（ML）专家注意到，有时请求不能被满足，因为Amazon Lex不能理解用户所说的类别，如`funny`、`fun`和`humor`。ML专家需要在不改变Lambda代码或DynamoDB中数据的情况下解决这个问题。该ML专家应该如何解决这个问题？ A company that runs an online library is implementing a chatbot using Amazon Lex to provide book recommendations based on category. This intent is fulfilled by an AWS Lambda function that queries an Amazon DynamoDB table for a list of book titles, given a particular category. For testing, there are only three categories implemented as the custom slot types: `comedy`, `adventure`, and `documentary`. A machine learning (ML) specialist notices that sometimes the request cannot be fulfilled because Amazon Lex cannot understand the category spoken by users with utterances such as `funny`, `fun`, and `humor`. The ML specialist needs to fix the problem without changing the Lambda code or data in DynamoDB. How should the ML specialist fix the problem?
    - [ ] A. 在枚举值列表中添加未被识别的词，作为槽类型中的新值。 Add the unrecognized words in the enumeration values list as new values in the slot type.
    - [ ] B. 创建一个新的自定义槽类型，将未被识别的词作为枚举值添加到这个槽类型中，并将这个槽类型用于槽。 Create a new custom slot type, add the unrecognized words to this slot type as enumeration values, and use this slot type for the slot.
    - [ ] C. 在数据库中使用亚马逊SearchQuery内置的槽类型进行自定义搜索。 Use the Amazon SearchQuery built-in slot types for custom searches in the database.
    - [ ] D. 在自定义槽类型中添加未被识别的词作为同义词。 Add the unrecognized words as synonyms in the custom slot type.

    <details>
       <summary>Answer</summary>

       答案C。

    </details>
