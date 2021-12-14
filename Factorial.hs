import Control.Exception ()
import Data.Time ( diffUTCTime, getCurrentTime )

factorial 0 = 1
factorial n = n * factorial (n-1)

main = do
    start <- getCurrentTime
    print ("Result: " ++ show (factorial 120))
    end <- getCurrentTime
    print ("Time: " ++ show (diffUTCTime end start))
