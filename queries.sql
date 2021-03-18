-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

-- select ProductName, CategoryName from Product
-- join Category on product.CategoryId = category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

-- SELECT O.Id, S.CompanyName
-- FROM 'Order' as O
-- JOIN Shipper as S
-- ON O.ShipVia = S.Id
-- WHERE O.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

-- select P.ProductName, O.Quantity
-- from 'Product' as P
-- join 'OrderDetail' as O
-- on O.ProductId = P.Id
-- where O.OrderId = 10251
-- order by P.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

-- select 
-- O.Id as OrderID,
-- C.CompanyName as CustomersCompanyName, 
-- E.LastName as employeesLastName
-- from 'Order' as O
-- join 'Customer' as C
-- on O.CustomerId = C.Id
-- join 'Employee' as E
-- on O.EmployeeId = E.id;
