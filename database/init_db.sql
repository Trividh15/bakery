-- PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INTEGER NOT NULL
);

-- ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    items TEXT NOT NULL,
    total INTEGER NOT NULL,
    status TEXT DEFAULT 'Processing'
);

-- EXTENDED PRODUCT LIST
INSERT INTO products (name, price) VALUES
('Paneer Puff', 40),
('Jeera Cookies', 25),
('Nankhatai', 35),
('Masala Bun', 20),
('Elaichi Rusk', 28),
('Veg Patties', 45),
('Fruit Cake', 50),
('Cream Roll', 40),
('Atta Biscuit', 22),
('Croissant', 70),
('Blueberry Muffin', 60),
('Chocolate Doughnut', 50),
('Apple Pie', 90),
('Brownie', 80),
('Garlic Breadsticks', 55),
('Cinnamon Roll', 75),
('Vanilla Cupcake', 45),
('Banana Bread Slice', 50),
('Strawberry Tart', 65),
('Almond Biscotti', 38),
('Chocolate Croissant', 72),
('Lemon Pie', 60),
('Red Velvet Cupcake', 55),
('Walnut Brownie', 85),
('Choco Chip Cookies', 30),
('Pineapple Pastry', 50),
('Multigrain Bread', 40),
('Khari Biscuit', 18),
('Honey Cake', 52),
('Cheese Straws', 35);

-- OPTIONAL: Sample orders
INSERT INTO orders (items, total, status) VALUES
('1x Paneer Puff, 2x Jeera Cookies', 90, 'Delivered'),
('1x Brownie, 1x Croissant, 1x Banana Bread Slice', 200, 'Processing'),
('2x Garlic Breadsticks, 1x Chocolate Doughnut', 160, 'Shipped');
