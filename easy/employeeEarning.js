// 181. Employees Earning More Than Their Managers
// Write a solution to find the employees who earn more than their managers.

# Write your MySQL query statement below
SELECT e.name AS Employee
FROM Employee e
JOIN Employee m
    ON e.managerId = m.id
WHERE e.salary > m.salary;