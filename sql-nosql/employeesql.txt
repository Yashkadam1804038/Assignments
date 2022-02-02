/*create TABLE employee(
    id INT IDENTITY PRIMARY KEY,
fname VARCHAR(50),
lname VARCHAR(50),
position VARCHAR(50),
salary INT,
dateofjoining DATE
);*/
--select * from employee

/*INSERT INTO employee ( fname, lname, position, salary, dateofjoining)
 VALUES
  ( 'abc', 'xyz', 'manager', 82000, '2003-05-23'),
   ( 'yer', 'pql', 'techlead', 45000, '2009-09-30'),
    ( 'rte', 'oij', 'associate', 85000, '2012-10-15'),
     ( 'eh', 'ef', 'trainee', 77000, '2013-07-17'),
      ( 'er', 'aam', 'manager', 79000, '2014-02-04'),
       ( 'yh', 'kdam', 'techlead', 71000, '2015-03-22'),
        ( 'sh', 'kam', 'associate', 72000, '2016-08-24'),
         ( 'ash', 'adam', 'manager', 95000, '2017-12-10'),
          ( 'yas', 'am',  'techlead',25000, '2019-11-08'),
          ( 'fr', 'k',  'trainee',91000, '2018-06-06'),
         ( 'a', 'z', 'manager', 39000, '2003-07-07'),
    ( 'e', 'l', 'manager', 49000, '2009-08-08'),
    ( 'r', 'ij', 'trainee', 15000, '2012-09-09'),
     ( 'h', 'gt', 'techlead', 80000, '2013-10-10'),
      ( 'f', 'aa', 'manager', 78000, '2014-11-11'),
       ( 'qq', 'rr',  'manager',99000, '2015-04-04'),
        ( 'tt', 'ss',  'trainee',12000, '2016-01-11'),
         ( 'uu', 'vv',  'techlead',22000, '2017-01-28'),
          ( 'ff', 'ww', 'manager',26000, '2019-03-13');*/


--first query
/*SELECT *
FROM employee
WHERE salary IN (SELECT MAX(salary) FROM employee
UNION
SELECT MIN(salary) FROM employee); */

--second query
--SELECT * from employee
--WHERE position='manager'

--third query
--SELECT * FROM employee
--WHERE salary IN (SELECT MIN(salary) FROM employee)