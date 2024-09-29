import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

const LoadingButton = () => {
    return(
        <Button disabled>
            <Loader2 className="animate-spin" />
            Loading...
        </Button>
    )
}

export default LoadingButton;