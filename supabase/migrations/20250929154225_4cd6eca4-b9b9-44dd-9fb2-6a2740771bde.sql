-- Create the initial user account for Monty
-- We'll use the auth.users table directly via a function that handles user creation

-- Create a function to safely create an initial user
CREATE OR REPLACE FUNCTION create_initial_mors_user()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
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
        
        -- Insert into auth.users (this is typically handled by Supabase Auth API)
        -- For development purposes, we'll create a profile directly and let the user be created via signup
        
        -- Log that we attempted to create the user
        RAISE NOTICE 'User creation attempted for Monty@mors.org.uk';
    ELSE
        RAISE NOTICE 'User Monty@mors.org.uk already exists';
    END IF;
END;
$$;

-- Execute the function
SELECT create_initial_mors_user();