--Cálculo de fatorial

factorial 0 = 1
factorial n = n * factorial (n-1)

--Como testar no terminal:
-- $ ghci
-- $ load: Factorial.hs
-- $ :set +s
-- $ factorial 8

-- Resultado:
-- $ 40320
-- $ (0.01 secs, 84,968 bytes)
-- 10 milisegundos