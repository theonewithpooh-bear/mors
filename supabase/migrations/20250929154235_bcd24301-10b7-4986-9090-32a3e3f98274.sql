-- Fix the security warning by setting search_path
CREATE OR REPLACE FUNCTION create_initial_mors_user()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    user_id uuid;
    user_exists boolean;
BEGIN
    -- Check if user already exists
    SELECT EXISTS(
        SELECT 1 FROM auth.users WHERE email = 'Monty@mors.org.uk'
    ) INTO user_exists;
    
    -- Only create if user doesn't exist
    IF NOT user_exists THEN
        -- Generate a new UUID for the user
        user_id := gen_random_uuid();
        
        -- Log that we attempted to create the user
        RAISE NOTICE 'User creation attempted for Monty@mors.org.uk';
    ELSE
        RAISE NOTICE 'User Monty@mors.org.uk already exists';
    END IF;
END;
$$;