---
sidebar_position: 2
---

# Connecting to the server (Instance)

For simplicity, the instances will be referred to as a server in this guide.</li>

## Create server (Create)

<ol>
    <li>Enter the <b>Server</b> menu in the <b>"Virtual Server"</b>.</li>
    <li>Click the <b>Connect</b> button.</li>
    <li>Fields will display relevant information and direct links to the web console.</li>
    <li>By clicking on it, a new browser tab will open and you can directly access the server.</li>
</ol>

  ![Connect instance](./img/connect-to-instance/Connect-instance.png)

<hr></hr>

## Connecting to an external server

### Create a keypair

<ol>
    <li>A Keypair can be created when an instance is created. Also click the <b>Create Key Pair</b> button from the <b>Key pairs menu</b>.</li>
</ol>

  ![Connect instance-2](./img/connect-to-instance/Connect-instance-2.png)

<ol start='2'>
    <li>Type the name of the Keypair you want to create and click <b>Create</b>. The keypair will then be generated and the .pem file will be downloaded to your browser.</li>
</ol>

  ![Connect instance-3](./img/connect-to-instance/Connect-instance-3.png)

<ol start='3'>
    <li>Use the keypair you created. Click the enter button and a field will appear where you can enter the name and public key.</li>
    <li>Instructions on how to generate SSH-keygen will also appear.</li>
</ol>

  ![Connect instance-4](./img/connect-to-instance/Connect-instance-4.png)

<hr></hr>

## Remote connection to Instance

### Connect to Instance using Keypair

> Attention! Public IP address is essential to access Instance from Remote or Web Console, see the following document about it! <a href="./instance#ip-хаяг-удирдах-interface-manage">Add a Public IP address</a> to the Instance (Attach Interface), and if the Instance is created in a Private Network, add a Floating IP address to the Instance <a href="./instance#серверт-floating-ip-хаяг-холбох-associate-floating-ip">(Associate Floating IP)</a>. Note that if the SSH port of the Instance is not opened, it will not be possible to connect! It is necessary to open an SSH port on the Security Group or virtual firewall, see the next section - Opening an <a href="./security">SSH Port and Adding a Security Group to the Instance</a>.

<ol>
    <li>When creating an Instance, fill in the Keypair option in the Authentication section, choose from the Keypairs you have created, and bind it to the Instance.</li>
    <li>Go to the directory where the Keypair private key file (.pem file) stored on your PC is located and open a command shell and type the following command.</li>
</ol>

```bash
chmod 400 .\NAME.pem
ssh -i .\NAME.pem IMAGETYPE@IP
```
For example, if your Instance with Ubuntu operating system is running at IP address 202.131.1.110

> When connecting to an Instance from an Ubuntu system, the .pem file requires only read permission, so you need to run the chmod 400 command.

```bash
chmod 400 .\NAME.pem
ssh -i .\NAME.pem ubuntu@202.131.1.110
```

  ![SSH түлхүүр connected](./img/connect-to-instance/keypair-connected.png)

<hr></hr>

### Login with username and password

> If you log in using Username & Password, there are two ways to log in: Web Console and SSH.

#### Web Console-р нэвтрэх

<ol>
    <li>Сервер цэсрүү ороод холбогдох гэж буй серверийн ард байрлах <b>Холбогдох</b> товчийг дарна. Энэ нь сервер лүү холбогдоход хамгийн амархан арга бөгөөд copy болон paste үйлдэл хийгдэх боломжгүйг анхаарна уу!!!</li>
    <li>Дараах цонх нээгдэх ба сервер үүсгэхдээ <b>Хандах эрх</b> хэсэгт бичсэн хэрэглэгчийн нэр, нууц үгийг ашиглаж нэвтрэнэ.</li>
</ol>

  ![connection](./img/connect-to-instance/connection.png)

<ol start='3'>
    <li>Хэрэглэгчийн нэр, нууц үгийг зөв оруулсны дараа сервер лүү холбогдоно.</li>
</ol>

  ![success](./img/connect-to-instance/success.png)

#### SSH аргаар нэвтрэх
<ol>
    <li>Сервер үүсгэхдээ <b>Хандах эрх</b> талбарыг Нууц үг гэж сонгоод өөрийн ашиглах хэрэглэгчийн нэр, нууц үгийг оруулж өгөх.</li>
    <li>Сервер рүүгээ SSH-р холбогдохдоо shell эсвэл terminal дээр ээ доорх командыг ажиллуулна.</li>
</ol>

```bash
ssh user_name@public_ip
```
<ol start='3'>
    <li>Тохируулсан нууц үгийг оруулж SSH-р амжилттай нэвтэрнэ.</li>
</ol>

<hr></hr>

### Windows Server үйлдлийн систем бүхий серверлүү Remote Desktop Connection (RDP)-р холбогдох

:::caution Анхааруулга
Та RDP-р холбогдохын тулд тухайн серверийн холбосон Портын тохиргоо дээр RDP порт буюу 3389 port-г нээх шаардлагатай. Портын тохиргоо хэсгээс дэлгэрнгүйг уншина уу.
:::

<ol>
    <li>Та Windows Server-тэй сервер асаамагц юун түрүүнд заавал Web Console-р холбогдоно. Системийн хамгийн анхны хэрэглэгчийн хэрэглэгчийн нэр, нууц үгийг тохируулж өгөх шаардлагатай.</li>
    <li>Windows server лүү холбогдох гэж буй client-с Remote Desktop Connection нээх.</li>
</ol>

  ![RDP](./img/connect-to-instance/Instance-windows-connection.png)

<ol start='3'>
    <li>Computer талбарт серверийн Public IP хаягыг оруулж өгөх.</li>
</ol>

  ![RDP-2](./img/connect-to-instance/Instance-windows-connection1.png)

<ol start='4'>
    <li>Connect хийхэд холбогдох хэрэглэгчийн credentials асуух бөгөөд эхний алхам дээр тохируулсан хэрэглэгчийн нэр болон нууц үгийг ашиглан нэвтэрнэ.</li>
</ol>

  ![RDP-2](./img/connect-to-instance/Instance-windows-connection2.png)

<ol start='5'>
    <li>Хэрвээ Credssp-тэй холбоотой алдаа гарах тохиолдолд. <a href="https://www.youtube.com/watch?v=Mp9vPS4Efto">How to Fix Credssp Encryption Oracle Remediation Error | Remote Desktop Connection</a> энэхүү заавар хэрэг болно.</li>
</ol>
