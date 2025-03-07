# Coffee Shop Order System

## Problem Statement

You are building a simple event-driven system for a coffee shop using Node.js and the `events` module. Your system should handle orders and payments for coffee.

## Tasks

1. **Create an event emitter** for the coffee shop.
2. **Handle the "order" event**, which should take two parameters:
   - `type` (e.g., "Espresso", "Latte", "Cappuccino")
   - `size` (e.g., "small", "medium", "large")
   - The system should log a message confirming the order and start preparing the coffee (with a delay of 2 seconds).
3. **Handle the "checkout" event**, which should take one parameter:
   - `amount` (total price of the order)
   - The system should log a message displaying the amount and simulate payment processing (with a delay of 4 seconds).
4. **Emit the events** for ordering a coffee and completing checkout.

## Example Usage

- Ordering a `large Cappuccino`
- Checking out with an amount of `5.00 USD`

Your task is to implement this functionality using the `events` module in Node.js.
