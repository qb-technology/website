export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      avatar: {
        Row: {
          alt: string | null
          created_at: string
          id: number
          src: string | null
        }
        Insert: {
          alt?: string | null
          created_at?: string
          id?: number
          src?: string | null
        }
        Update: {
          alt?: string | null
          created_at?: string
          id?: number
          src?: string | null
        }
        Relationships: []
      }
      devProject: {
        Row: {
          created_at: string
          desc: string | null
          favicon: string | null
          id: number
          image: string | null
          link: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          desc?: string | null
          favicon?: string | null
          id?: number
          image?: string | null
          link?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          desc?: string | null
          favicon?: string | null
          id?: number
          image?: string | null
          link?: string | null
          title?: string | null
        }
        Relationships: []
      }
      onboardingForm: {
        Row: {
          address: string | null
          companyDescription: string | null
          companyName: string | null
          competitors: string[] | null
          created_at: string
          email: string | null
          facebook: string | null
          geography: string | null
          id: number
          instagram: string | null
          linkedin: string | null
          name: string | null
          others: string | null
          position: string | null
          services: string[] | null
          target: string | null
        }
        Insert: {
          address?: string | null
          companyDescription?: string | null
          companyName?: string | null
          competitors?: string[] | null
          created_at?: string
          email?: string | null
          facebook?: string | null
          geography?: string | null
          id?: number
          instagram?: string | null
          linkedin?: string | null
          name?: string | null
          others?: string | null
          position?: string | null
          services?: string[] | null
          target?: string | null
        }
        Update: {
          address?: string | null
          companyDescription?: string | null
          companyName?: string | null
          competitors?: string[] | null
          created_at?: string
          email?: string | null
          facebook?: string | null
          geography?: string | null
          id?: number
          instagram?: string | null
          linkedin?: string | null
          name?: string | null
          others?: string | null
          position?: string | null
          services?: string[] | null
          target?: string | null
        }
        Relationships: []
      }
      pricingForm: {
        Row: {
          created_at: string
          email: string | null
          id: number
          name: string | null
          needs: string | null
          plan: Json | null
          questions: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          needs?: string | null
          plan?: Json | null
          questions?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          needs?: string | null
          plan?: Json | null
          questions?: string | null
        }
        Relationships: []
      }
      service: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: number
          title: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      testimony: {
        Row: {
          avatar: number | null
          created_at: string
          id: number
          msg: string | null
          name: string | null
          position: string | null
          url: string | null
        }
        Insert: {
          avatar?: number | null
          created_at?: string
          id?: number
          msg?: string | null
          name?: string | null
          position?: string | null
          url?: string | null
        }
        Update: {
          avatar?: number | null
          created_at?: string
          id?: number
          msg?: string | null
          name?: string | null
          position?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "testimony_avatar_fkey"
            columns: ["avatar"]
            isOneToOne: false
            referencedRelation: "avatar"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
