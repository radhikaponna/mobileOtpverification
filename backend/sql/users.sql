INSERT INTO public.users
(user_id, tenant_id, user_name, mobile_number, email, "password", "firebaseUID", "role", status, created_date, updated_date)
VALUES
(1, 1, 'John Doe', '1234567890', 'john.doe@example.com', '$2b$10$gGkW0zQXGHH5e0cQzJW8Quwe/6l/abct9gprYDxMzW/It65/oA2Cm', 'firebaseUID1', 'Admin', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(2, 1, 'Jane Smith', '9876543210', 'jane.smith@example.com', '$2b$10$abcd1234efgh5678ijklmnopqrstuvwx', 'firebaseUID2', 'Payee', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(3, 2, 'Alice Brown', '1122334455', 'alice.brown@example.com', '$2b$10$hijklm123nopqrstuvwx456yz789abcd', 'firebaseUID3', 'F-Admin', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(4, 2, 'Bob White', '5566778899', 'bob.white@example.com', '$2b$10$mnopqrstuvw123xyza456bcd789efgh', 'firebaseUID4', 'Admin', 'inactive', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(5, 1, 'Charlie Black', '2233445566', 'charlie.black@example.com', '$2b$10$qrstuvwx123456yza789bcd789efgh', 'firebaseUID5', 'Payee', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(6, 2, 'Daisy Green', '6677889900', 'daisy.green@example.com', '$2b$10$hijklm123xyza456bcd789efghqrst', 'firebaseUID6', 'Admin', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(7, 2, 'Eve Red', '3344556677', 'eve.red@example.com', '$2b$10$mnopqrstuvw123xyza789hijklm456', 'firebaseUID7', 'Payee', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(8, 2, 'Frank Yellow', '7788990011', 'frank.yellow@example.com', '$2b$10$qrstuvwx123456yza789bcd123hijk', 'firebaseUID8', 'F-Admin', 'inactive', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(9, 1, 'Grace Blue', '4455667788', 'grace.blue@example.com', '$2b$10$mnopqrstuvwx123456yza789bcd', 'firebaseUID9', 'Admin', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(10, 1, 'Hank Purple', '9900112233', 'hank.purple@example.com', '$2b$10$qrstuvwxyza789456bcd123hijklmn', 'firebaseUID10', 'Payee', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000);
DELETE FROM public.users
WHERE user_id IN (
  SELECT user_id
  FROM public.users
  LIMIT 10
);
INSERT INTO public.users
(user_id, tenant_id, user_name, mobile_number, email, "password", "firebaseUID", "role", status, created_date, updated_date)
VALUES
(1, 1, 'John Doe', '1234567890', 'john.doe@example.com', '123456789', 'firebaseUID1', 'Admin', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(2, 2, 'Jane Smith', '9876543210', 'jane.smith@example.com', 'password123', 'firebaseUID2', 'Payee', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(3, 1, 'Mark Johnson', '5551234567', 'mark.johnson@example.com', 'markpassword', 'firebaseUID3', 'F-Admin', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(4, 2, 'Emily Davis', '4449876543', 'emily.davis@example.com', 'emilypassword', 'firebaseUID4', 'Admin', 'inactive', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(5, 1, 'Michael Brown', '3337654321', 'michael.brown@example.com', 'michaelpass', 'firebaseUID5', 'Payee', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(6, 2, 'Sarah Wilson', '2222345678', 'sarah.wilson@example.com', 'sarah123', 'firebaseUID6', 'Admin', 'inactive', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(7, 1, 'David Lee', '1113456789', 'david.lee@example.com', 'davidpassword', 'firebaseUID7', 'F-Admin', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(8, 2, 'Sophia Martinez', '6667778889', 'sophia.martinez@example.com', 'sophiapassword', 'firebaseUID8', 'Payee', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(9, 1, 'James Taylor', '7771234567', 'james.taylor@example.com', 'james1234', 'firebaseUID9', 'Admin', 'inactive', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000),
(10, 2, 'Olivia Harris', '8882345678', 'olivia.harris@example.com', 'olivia5678', 'firebaseUID10', 'F-Admin', 'active', EXTRACT(EPOCH FROM NOW()) * 1000, EXTRACT(EPOCH FROM NOW()) * 1000);
