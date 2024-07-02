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
      contact_form: {
        Row: {
          created_at: string
          email: string | null
          id: number
          msg: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          msg?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          msg?: string | null
          name?: string | null
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
      service_features: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: number
          service_id: number | null
          title: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          service_id?: number | null
          title?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          service_id?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_features_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      serviceApproach: {
        Row: {
          created_at: string
          description: string | null
          id: number
          service_id: number | null
          step: number | null
          title: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          service_id?: number | null
          step?: number | null
          title?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          service_id?: number | null
          step?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "serviceApproach_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      serviceFaqs: {
        Row: {
          answer: string | null
          created_at: string
          id: number
          question: string | null
          service_id: number | null
        }
        Insert: {
          answer?: string | null
          created_at?: string
          id?: number
          question?: string | null
          service_id?: number | null
        }
        Update: {
          answer?: string | null
          created_at?: string
          id?: number
          question?: string | null
          service_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "serviceFaqs_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          created_at: string
          description: string | null
          excerpt: string | null
          handle: string
          icon: string | null
          id: number
          image: string | null
          seo_description: string | null
          seo_title: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          excerpt?: string | null
          handle: string
          icon?: string | null
          id?: number
          image?: string | null
          seo_description?: string | null
          seo_title?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          excerpt?: string | null
          handle?: string
          icon?: string | null
          id?: number
          image?: string | null
          seo_description?: string | null
          seo_title?: string | null
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
          service_id: number | null
          url: string | null
        }
        Insert: {
          avatar?: number | null
          created_at?: string
          id?: number
          msg?: string | null
          name?: string | null
          position?: string | null
          service_id?: number | null
          url?: string | null
        }
        Update: {
          avatar?: number | null
          created_at?: string
          id?: number
          msg?: string | null
          name?: string | null
          position?: string | null
          service_id?: number | null
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
          {
            foreignKeyName: "testimony_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
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
