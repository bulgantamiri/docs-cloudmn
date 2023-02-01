---
sidebar_position: 12
---

# Project

## What is a project?
Project means sharing the server and financial management part that you are using with others. The project includes server, disk, network, port settings, IP addresses, WAF, SSH keys, backups, etc., and allows other people (developers) access to these resources. It will also be possible to send and view payment information by connecting the information of the financial or payment staff.

When you create a server, create a new project and create your server on that project, you can add the following permissions to each project. Project Rights:

- **Owner - the person who originally created the project**
- **Payer - the person who pays for the project**
- **User - developer and user of the project**. It includes three types of people. 

The purpose of creating a project is to separate the roles of those involved in server administration.

For example: If you are not a paying member of the service, you can invite a paying member to go to the billing-only payer email address. In other words, if you have a large number of servers from different owners, the payment for each server goes to each payer of the project, making it easier for the owner.

:::info
One project will be automatically created for each person who creates an account.
:::

## How to create a project?

### Төсөл үүсгэх

1. Click on the **Project** section of the **Account menu** on the left-hand side of the user console. 

![Project-1](./img/project/Project-1.png)

2. Click on the **Create Project** button, enter the relevant information and click the Create button.

![Project-2](./img/project/Project-create.png)

### Project dashboard

By clicking on the created project, detailed information about the project and information about other members who have the right to participate in the project will be displayed.

![Project-3](./img/project/Project-2.png)

:::tip
There are two ways to invite a project member: **Invite a user by email** or **invite them by creating a user**.
:::

By clicking the **Invite member** button, check the field for writing the inviter's e-mail address and his role and click the **Invite** button. The inviting user must be registered on <a href='https://cloud.mn'>cloud.mn</a>, and the project rights will be activated upon acceptance of the invitation.

![Project-4](./img/project/Project-4.png)

But when you create and invite a user, select the invitee's login e-mail address, password, and project role, and click the Invite button.

![Project-5](./img/project/Project-3.png)

## How to create a server in the newly created project?

Replace the existing project with the newly created project.

![Project-6](./img/project/Project-5.png)

1. Enter the **Instances** menu in the **Virtual Server** menu. 

![Project-_](./img/instance/Instance-Create.png)

2. Гарч ирэх шинэ цонхонд тухайн сервертэй холбоотой мэдээлэл болон үзүүлэлтүүдийг сонгох шаардлагатай. Эхлээд **Үйлдлийн систем**-ийг сонгоно. 
:::info 
Хэрвээ та Windows сервер үүсгэхийг хүсэж байгаа бол info@cloud.mn-рүү хүсэлт гаргах шаардлагатай.
:::

![Project-8](./img/instance/Image-list.png)

3. Үйлдлийн систем сонгосны дараа **Машины төрөл** буюу vCPU, vRAM сонгоно. Машины төрөл нь үндсэн 4 хэсэгт хуваагддаг.

- **Cloud** - Энгийн хэрэглэгчдэд зориулсан сонголт бөгөөд энгийн хэрэглээ, блог, статик веб, тестийн орчин, санах  ойн cache хадгалалт, жижиг систем, энгийн database ажиллуулахад тохиромжтой серверийн төрөл юм.
- **General** - Онлайн худалдаа, мэдээний сайт гэх мэт илүү өндөр ачаалал авдаг, найдвартай ажиллагаа шаардсан системүүд ажиллуулахад тохиромжтой серверийн төрөл юм.
- **Memory** - Илүү хурд болон ачаалал даах төрөл. Өндөр ачаалал бүхий өгөгдлийн сангийн систем, их хэмжээний ачаалал авдаг санах ой их шаардагддаг систем ажиллуулахад тохиромжтой серверийн төрөл юм.
- **Compute** - Илүү тооцоолон бодох төрөлд багтдаг, CI/CD application build хийх, видео зурагтай холбоотой процесс хийх, машин сургалт гэх мэт тооцоолон бодох функц ихтэй программ ажиллуулах тохиромжтой серверийн төрөл юм.

![Project-9](./img/instance/Flavor-list.png)

4. Бусад мэдээлэл

- **Серверийн нэр** буюу виртуал серверийн нэрийг өгнө.
- **Хандах эрх** талбарт оруулсан хэрэглэгчийн нэр, нууц үгийг ашиглаж серверлүүгээ SSH хандалт хийх боломжтой. Мөн хэрэглэгчийн үүсгэсэн SSH түлхүүрийн тусламжтай серверлүүгээ хандаж болдог. Серверлүүгээ нэвтрэх талаар <a href="/userguide/connect-to-instance">Сервертэй холбогдох</a> хэсгээс уншина уу.
- **Дискийн хэмжээ** дээр тухай серверт хэрэглэгдэх виртуал дискний хэмжээг оруулна.
- **Сүлжээ** дээр хэрэглэгч Private сүлжээний IP хаяг ашиглах боломжтой. Эсвэл **Автоматаар IP оноох** сонголтыг идэвхжүүлснээр cloud.mn тухайн үүсгэж буй серверт Public IP хаяг оноож өгөх болно. Тохиргооны тухай дэлгэрэнгүй <a href="/userguide/network#автоматаар-ip-оноох-болон-private-сүлжээний-харьцуулалт">Автоматаар-ip-оноох-болон-private-сүлжээний-харьцуулалт</a> хэсгээс уншина уу.
- **Портын тохиргоо** дээр хэрэглэгч өөрийн портын тохиргоог сонгоно. Энэ нь тухайн сервер хэрэглэгчийн сонгосон портын тохиргоо дээр бичигдсэн дүрмүүдийг мөрдөнө. Портын тохиргооны тухайн дэлгэрэнгүйг <a href="/userguide/security">Портын тохиргоонууд</a> хэсгээс уншина уу.
- Бүх тохиргоог сонгосны дараа тухайн сервер тасралтгүй ажиллахад сард гарах мөнгөн дүнг бодож харуулна.

![Project-10](./img/instance/Amount.png)

Бүх тохиргоо болон үнийн дүнг нягталж үзсэний дараа **Үүсгэх** товчийг дарснаар таны виртуал сервер үүснэ.

![Project-10](./img/instance/Instance.png)
